import { getUrl } from '../../utils/routes';
import { Heart, Minus, Plus, Cart } from '@helpdice/icons';
import {
  Badge,
  Button,
  Card,
  Popover,
  Spacer,
  Tabs,
  Text
} from '@helpdice/ui';
import { useCart } from '@helpdice/pro';
import { Link } from 'react-router-dom';
import React from 'react';

interface ProductProps {
  open: boolean;
  onClose: Function;
  currency?: string;
  wishlist?: any[];
  addToWishlist?: Function;
  removeFromWishlist?: Function;
}

const CartWidget: React.FunctionComponent<ProductProps> = ({
  open = false,
  onClose = () => {},
  currency = '₹',
  wishlist = [],
  addToWishlist = () => {},
  removeFromWishlist = () => {},
}: ProductProps) => {
  const { addItem, removeItem, totalUniqueItems, items, updateItemQuantity } = useCart();
  const changeHandler = (next: any) => {
    onClose(next);
  };

  const content: React.ReactNode = (
    <Tabs
      style={{ width: 300, minHeight: 340, maxHeight: 500 }}
      initialValue="1"
      align="center"
      leftSpace={0}
    >
      <Tabs.Item
        style={{ position: 'relative' }}
        label={
          <>
            <Cart /> Cart
          </>
        }
        value="1"
      >
        {items.length > 0 ? (
          <>
            {items.map((item: any, index: any) => (
              <Card
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                mx={1}
                my={0.4}
                key={`item-${item._id}-${index}`}
              >
                <Card.Content px={0.5} py={0.3} w="78%">
                  <Text mb={0}>{item.name}</Text>
                  <Text font="medium" small my={0.3} scale={0.8}>
                    <b>
                      {currency}&nbsp;{item.price}
                    </b>
                  </Text>
                  <Spacer h={0.4} />
                  <Button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                    iconRight={<Minus />}
                    auto
                    scale={1 / 3}
                    px={0.6}
                    crossOrigin={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  <Text font="small" small mx={1} my={0}>
                    {item.quantity}
                  </Text>
                  <Button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                    iconRight={<Plus />}
                    auto
                    scale={1 / 3}
                    px={0.6}
                    crossOrigin={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                </Card.Content>
                <Card.Content py={0.3} width="22%">
                <Button
                      onClick={() => removeItem(item.id)}
                      iconRight={<>&#10060;</>}
                      auto
                      scale={2 / 3}
                      px={0.6}
                      crossOrigin={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  <Spacer h={0.3} />
                  <Button
                      onClick={() => addToWishlist(item)}
                      iconRight={<Heart />}
                      auto
                      scale={2 / 3}
                      px={0.6}
                      crossOrigin={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                </Card.Content>
              </Card>
            ))}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center',
                position: 'absolute',
                bottom: 0,
                width: '100%',
              }}
            >
              <Link to={'/account/cart'}>
                <Button
                  mx="auto"
                  my={1}
                  crossOrigin={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  View Cart
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div
            style={{
              minHeight: 280,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Your Cart is Empty !</Text>
          </div>
        )}
      </Tabs.Item>
      <Tabs.Item
        label={
          <>
            <Heart set="filled" /> Wishlist{' '}
          </>
        }
        value="2"
      >
        {wishlist.length > 0 ? (
          <>
            {wishlist.map((item, index) => (
              <Card
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                mx={1}
                my={0.4}
                key={`item-${item._id}-${index}`}
              >
                <Card.Content px={0.5} py={0.3} w="78%">
                  <Text mb={0}>{item.name}</Text>
                  <Text font="small" small my={0.3} scale={0.8}>
                    <b>
                      {currency}&nbsp;{item.price}
                    </b>
                  </Text>
                  <Spacer h={0} />
                  <Text font="x-small" small my={0}>
                    Qty : {item.quantity}
                  </Text>
                </Card.Content>
                <Card.Content py={0.3} width="22%">
                  <Button
                    onClick={() => removeFromWishlist(item.id)}
                    iconRight={<>&#10060;</>}
                    auto
                    scale={2 / 3}
                    px={0.6}
                    crossOrigin={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  <Spacer h={0.3} />
                  <Button
                    onClick={() => addItem(item)}
                    iconRight={<Cart />}
                    auto
                    scale={2 / 3}
                    px={0.6}
                    crossOrigin={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                </Card.Content>
              </Card>
            ))}
          </>
        ) : (
          <div
            style={{
              minHeight: 280,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Your Wishlist is Empty !</Text>
          </div>
        )}
      </Tabs.Item>
    </Tabs>
  );

  return (
    <Popover
      placement="bottom"
      child={content}
      visible={open}
      onVisibleChange={changeHandler}
    >
      <Badge.Anchor>
        <Badge scale={0.4}>{totalUniqueItems}</Badge>
        <Cart color="#99a3a4" style={{ cursor: 'pointer' }} />
      </Badge.Anchor>
    </Popover>
  );
};

export default CartWidget;
