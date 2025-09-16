import React from 'react';
import Placeholder from "../../components/Placeholder";
import { CURRENCY, formatCurrency } from "../../utils/helpers";
import { Accounting, Auth } from "@helpdice/sdk";
import { Button, FormWrapper } from "@helpdice/ui";
import { useCart } from "@helpdice/pro";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import * as pkg from 'react-helmet-async';
import { metaTags } from '../../utils/meta';

const CartPage = () => {
    const navigate = useNavigate();
    const currentUser = Auth.getUserFromStrorage();
    const { cartTotal, items, updateItemQuantity, totalUniqueItems, removeItem, emptyCart } = useCart();
    const { Helmet } = pkg;
    return (
        <>
            <Helmet>
                <title>{metaTags.cart.meta_title}</title>
                <meta name="description" content={metaTags.cart.meta_description} />
            </Helmet>
            <div className="py-10 lg:py-12 lg:px-10 xl:py-10 xl:px-20">
                <section className="py-8 antialiased md:py-16">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
                        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                            <div className="mx-auto w-full flex-none lg:max-w-xl xl:max-w-3xl">
                                <div className="space-y-6">
                                    {items.length > 0 ? items.map((item) => (
                                        <div key={`cart-item-${item.id}`} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                <a href="#" className="shrink-0 md:order-1">
                                                    <img className="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                                                    <img className="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                                                </a>

                                                <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                                <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                    <div className="flex items-center">
                                                        <button type="button" onClick={() => item.quantity ? updateItemQuantity(item.id, item.quantity - 1) : null} data-input-counter-decrement="counter-input" className="inline-flex cursor-pointer h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                            </svg>
                                                        </button>
                                                        <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={item.quantity} required />
                                                        <button type="button" onClick={() => item.quantity ? updateItemQuantity(item.id, item.quantity + 1) : null} data-input-counter-increment="counter-input" className="inline-flex cursor-pointer h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="text-end md:order-4 md:w-32">
                                                        <p className="text-base font-bold text-gray-900 dark:text-white">{formatCurrency(item.price, CURRENCY)}</p>
                                                    </div>
                                                </div>

                                                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                    <a href="#" className="text-base block font-medium text-gray-900 hover:underline dark:text-white">{item?.name}</a>
                                                    <div className="flex items-center gap-4">
                                                        <button type="button" className="inline-flex cursor-pointer items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                                            </svg>
                                                            Add to Wishlist
                                                        </button>

                                                        <button onClick={() => removeItem(item.id)} type="button" className="inline-flex cursor-pointer items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                            </svg>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )) : (
                                        <Placeholder />
                                    )}
                                </div>
                            </div>
                            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                                    <FormWrapper
                                        enableReinitialize
                                        initialValues={{
                                            party: currentUser?.info?._id,
                                            date: new Date(),
                                            items: items.map((itm) => ({
                                                item: itm.id,
                                                tax: '',
                                                rate: itm.price,
                                                quantity: itm.quantity,
                                                amount: itm.itemTotal
                                            })),
                                            netTotal: cartTotal,
                                            discount: 0,
                                            gst: cartTotal * 18 / 100,
                                            type: `SalesInvoice`,
                                            currency: 'INR',
                                            taxes: [
                                                {
                                                    index: 1,
                                                    taxAccount: 'CGST',
                                                    taxRate: 9,
                                                    taxAmount: cartTotal * 9 / 100
                                                },
                                                {
                                                    index: 2,
                                                    taxAccount: 'SGST',
                                                    taxRate: 9,
                                                    taxAmount: cartTotal * 9 / 100
                                                }
                                            ],
                                            baseGrandTotal: cartTotal,
                                            grandTotal: (cartTotal * 18 / 100) + cartTotal,
                                        }}
                                        onSubmit={async (values: any, { resetForm }) => {
                                            // console.log(values);
                                            return Accounting.createInvoice(values,
                                                {
                                                    onFetching() {
                                                        toast.info('Creating Order...');
                                                    },
                                                    onSuccess: (response: any) => {
                                                        toast.success(response.data.message);
                                                        emptyCart();
                                                        resetForm();
                                                        navigate('/account/orders');
                                                    },
                                                    onError: (error: any) => {
                                                        toast.error(error?.message);
                                                    }
                                                }
                                            );
                                        }}
                                    >
                                        {({ handleSubmit, values, isSubmitting }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="space-y-4">
                                                    <div className="space-y-2">
                                                        <dl className="flex items-center justify-between gap-4">
                                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                                            <dd className="text-base font-medium text-gray-900 dark:text-white">{formatCurrency(values.netTotal, CURRENCY)}</dd>
                                                        </dl>

                                                        <dl className="flex items-center justify-between gap-4">
                                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                                            <dd className="text-base font-medium text-green-600">{formatCurrency(values.discount, CURRENCY)}</dd>
                                                        </dl>

                                                        <dl className="flex items-center justify-between gap-4">
                                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">IGST (18%)</dt>
                                                            <dd className="text-base font-medium text-gray-900 dark:text-white">{formatCurrency(values.gst, CURRENCY)}</dd>
                                                        </dl>
                                                    </div>

                                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                                        <dd className="text-base font-bold text-gray-900 dark:text-white">{formatCurrency(values.grandTotal, CURRENCY)}</dd>
                                                    </dl>
                                                </div>
                                                <br />
                                                <Button loading={isSubmitting} type="submit" width="100%" className="flex w-full items-center justify-center rounded-lg bg-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-700">Create Order</Button>
                                            </form>
                                        )}
                                    </FormWrapper>
                                    {/* <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                        <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                            Continue Shopping
                            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                            </svg>
                        </a>
                    </div> */}
                                </div>
                                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
                                            <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                                        </div>
                                        <button type="submit" className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700">Apply Code</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default CartPage;