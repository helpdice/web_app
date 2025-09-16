import { sub } from 'date-fns';
import { IncomingMessage } from 'http';
// import { AppConfig } from './AppConfig';

export const CURRENCY = '₹ ';

export function toggleDarkMode() {
  if (typeof window !== 'undefined' && document.documentElement) {
    document.documentElement.classList.toggle('dark');
  }
}

export const getBaseUrl = () => {
  // if (process.env.NEXT_PUBLIC_APP_URL) {
  //   return process.env.NEXT_PUBLIC_APP_URL;
  // }

  // if (process.env.VERCEL_URL) {
  //   return `https://${process.env.VERCEL_URL}`;
  // }

  return 'http://localhost:3000';
};

// export const getI18nPath = (url: string, locale: string) => {
//   if (locale === AppConfig.defaultLocale) {
//     return url;
//   }

//   return `/${locale}${url}`;
// };

export function modifyArray(arr: Array<never>, action: string, element: never, index?: number) {
  switch(action) {
    case 'add':
      if (index === undefined) {
        arr.push(element);  // Add to the end
      } else {
        arr.splice(index, 0, element);  // Add at the specified index
      }
      break;
    case 'remove':
      if (index === undefined) {
        arr.pop();  // Remove from the end
      } else {
        arr.splice(index, 1);  // Remove from the specified index
      }
      break;
    default:
      console.log('Invalid action');
      break;
  }
  return arr;
}

export const shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const DayOfWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function humanTime(dateFuture: Date, natural: boolean) {
  if (!dateFuture || dateFuture.toString() === 'Invalid Date') {
    return 'Anonymously';
  }
  const dateNow = new Date();
  let d = Math.abs(dateFuture.getTime() - dateNow.getTime()) / 1000; // delta
  let r: any = {}; // result
  const s: any = {
      // structure
      years: 31536000,
      months: 2592000,
      weeks: 604800,
      days: 86400,
      hours: 3600,
      minutes: 60,
      seconds: 1
  };
  Object.keys(s).forEach((key) => {
      r[key] = Math.floor(d / s[key]);
      d -= r[key] * s[key];
  });

  // for example: {year:0,month:0,week:1,day:2,hour:34,minute:56,second:7}
  if (natural) {
      if (r.days > 0) {
          const _D = sub(new Date(), {
              days: r?.days,
              hours: r?.hours,
              minutes: r?.minutes
          });
          r = `${DayOfWeeks[_D.getDay()]}, ${_D.getDate()} ${shortMonth[_D.getMonth()]}`;
      } else if (r.hours > 0) {
          r = `${r.hours} hour ago`;
      } else if (r.minutes > 0) {
          r = `${r.minutes} min ago`;
      } else {
          r = `${r.seconds} sec ago`;
      }
  }
  return r;
}

export function formatCurrency(amount: number, currencySymbol?: string, currencyCode?: string) {
  // console.log(amount);
  // Check if the amount is null, undefined, or NaN
  if (amount == null || isNaN(amount)) {
      if (currencySymbol) {
          if (typeof amount === 'string') {
              const regex = new RegExp(`[${currencySymbol.trim()},]+`, 'g');
              return Number(String(amount).replace(regex, ''));
          }
          return `${currencySymbol} 0.00`;
      }
      return '0.00';
  }

  // If a currency symbol is provided, use it directly
  if (currencySymbol) {
      return (
          currencySymbol +
          Number(amount)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
      );
  }

  // If no symbol is provided, use the currencyCode to format the currency
  if (currencyCode) {
      const amtStr = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currencyCode
      })
          .format(amount)
          .split('');
      amtStr.splice(1, 0, ' ');
      return amtStr.join('');
  }

  // Return default message if no symbol or currencyCode is provided
  return 'Invalid currency parameters';
}

export function getCurrentUrl(options?: { req?: Request | IncomingMessage }): string {
  if (typeof window !== 'undefined') {
    // Frontend (browser)
    return window.location.href;
  } else if (options?.req) {
    // Backend (SSR)
    const req = options.req as any;

    const protocol =
      req.headers['x-forwarded-proto']?.split(',')[0] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = req.url || '/';

    return `${protocol}://${host}${url}`;
  } else {
    // SSR but no request provided
    return '';
  }
}