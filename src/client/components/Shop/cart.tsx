import { Card } from '@helpdice/ui';
// import { isLoggedIn } from '@utilities';
import React from 'react';
// import { useNavigate } from 'react-router';

const Cart: React.FunctionComponent = () => {
  const isLoggedIn = () => {
    return true;
  };

  if (isLoggedIn()) {
    return (
      <div id="all">
        <br />
        <div id="content">
          <div className="container">
            <div className="row contentCenter">
              <div id="basket" className="col-lg-8">
                <Card width="100%">
                  <h1>Shopping cart</h1>
                  <p className="text-muted mt-3">
                    {/* {% with total_items=cart|length %}
                          {% if cart|length > 0 %}
                            You currently have {{total_items}} item{{total_items|pluralize}} in your cart
                          {% else %}
                            Your cart is empty
                          {% endif %}
                        {% endwith %} */}
                  </p>
                  <table className="mt-4">
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: '250px' }}>
                          Product
                        </th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        {/* {% comment %}<th scope="col">Discount</th> {% endcomment %} */}
                        <th scope="col">Total</th>
                        <th scope="col" colSpan={2}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {% if cart|length > 0 %} */}
                      {/* {% for item in cart %}
                              {% with product=item.product %}
                              <tr style="background-color: white;">
                                <form action='{% url "cart:cart_add" product.id %}' method="post">
                                  {% csrf_token %}
                                  <td scope="row" data-label="Product">
                                    <a className="d-flex alignCenter" href="#">
                                      {% if product.image %}
                                      <img className="mr-2" width="50" height="50" src="{{ product.image.url }}" alt="{{product.name}}">
                                      {% endif %}
                                      {{product.name}}
                                    </a>
                                  </td>
                                  <td data-label="Quantity / Years">
                                    {{item.update_quantity_form.quantity}}
                                    {{item.update_quantity_form.update}}
                                  </td>
                                  <td data-label="Price">{{currency}} {{ item.price|intcomma }}</td>
                                  <td data-label="Total">{{currency}} {{ item.total_price|intcomma }}</td>
                                  <td><button type="submit" name="" className="btn-sm btn-outline-secondary">Refresh</button></td>
                                  <td><a href="{% url 'cart:cart_remove' product.id %}"><icon className="delete-icon"></icon></a></td>
                                </form>
                              </tr>
                              {% endwith %}
                            {% endfor %}
                          {% else %}
                            <tr style="background-color: white;">
                              <td colspan="6">Empty Cart</td>
                            </tr>
                          {% endif %} */}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan={2}>Total</th>
                        <th colSpan={2}>{}</th>
                        <th colSpan={2}>{}</th>
                      </tr>
                    </tfoot>
                  </table>
                  <br />
                  {/* <!-- /.table-responsive--> */}
                  <div className="box-footer d-flex contentCorner flex-column flex-lg-row">
                    <div className="left my-2">
                      <a href="/#Browse" className="btn btn-outline-secondary">
                        Continue shopping
                      </a>
                    </div>
                    <div className="my-2">
                      {/* {% comment %}<button className="btn btn-outline-secondary"><i className="fa fa-refresh"></i> Update cart</button> {% endcomment %}
                          {% if cart|length > 0 %}
                          <a href="{% url 'orders:checkout' %}" className="btn btn-primary">Proceed to checkout <icon className="arrow-right-icon"></icon></a>
                          {% endif %} */}
                    </div>
                  </div>
                </Card>
                {/* <!-- /.box--> */}
                {/* <!-- <div className="row same-height-row">
                    <div className="col-lg-3 col-md-6">
                      <div className="box same-height">
                        <h3>You may also like these products</h3>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="product same-height">
                        <div className="flip-container">
                          <div className="flipper">
                            <div className="front"><a href="detail.html"><img src="img/product2.jpg" alt="" className="img-fluid"></a></div>
                            <div className="back"><a href="detail.html"><img src="img/product2_2.jpg" alt="" className="img-fluid"></a></div>
                          </div>
                        </div><a href="detail.html" className="invisible"><img src="img/product2.jpg" alt="" className="img-fluid"></a>
                        <div className="text">
                          <h3>Fur coat</h3>
                          <p className="price">$143</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="product same-height">
                        <div className="flip-container">
                          <div className="flipper">
                            <div className="front"><a href="detail.html"><img src="img/product1.jpg" alt="" className="img-fluid"></a></div>
                            <div className="back"><a href="detail.html"><img src="img/product1_2.jpg" alt="" className="img-fluid"></a></div>
                          </div>
                        </div><a href="detail.html" className="invisible"><img src="img/product1.jpg" alt="" className="img-fluid"></a>
                        <div className="text">
                          <h3>Fur coat</h3>
                          <p className="price">$143</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="product same-height">
                        <div className="flip-container">
                          <div className="flipper">
                            <div className="front"><a href="detail.html"><img src="img/product3.jpg" alt="" className="img-fluid"></a></div>
                            <div className="back"><a href="detail.html"><img src="img/product3_2.jpg" alt="" className="img-fluid"></a></div>
                          </div>
                        </div><a href="detail.html" className="invisible"><img src="img/product3.jpg" alt="" className="img-fluid"></a>
                        <div className="text">
                          <h3>Fur coat</h3>
                          <p className="price">$143</p>
                        </div>
                      </div>
                    </div>
                  </div> --> */}
              </div>
              {/* <!-- /.col-lg-9--> */}
              <div className="col-lg-3">
                <Card width="100%" id="order-summary" className="card mb-3 p-3">
                  <div className="box-header">
                    <h3 className="mb-0">Order summary</h3>
                  </div>
                  <p className="text-muted">
                    Shipping and additional costs are calculated based on the
                    values you have entered.
                  </p>
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Order subtotal</td>
                          {/* <th>{currency} {Cart.get_total_price|intcomma }</th> */}
                        </tr>
                        <tr>
                          <td>Shipping and handling</td>
                          {/* <th>{currency} 0.00</th> */}
                        </tr>
                        <tr>
                          <td>Tax</td>
                          {/* <th>{currency} 0.00</th> */}
                        </tr>
                        <tr className="total">
                          <td>Total</td>
                          {/* <th>{currency} {Cart.get_total_price|intcomma }</th> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
                <Card width="100%">
                  <div className="box-header">
                    <h4 className="mb-0">Coupon code</h4>
                  </div>
                  <p className="text-muted mt-2">
                    If you have a coupon code, please enter it in the box below.
                  </p>
                  <br />
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Promo Code"
                      />
                      <span className="input-group-append">
                        <button
                          title=""
                          type="button"
                          className="btn btn-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-gift"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                          </svg>
                        </button>
                      </span>
                    </div>
                    {/* <!-- /input-group--> */}
                  </form>
                </Card>
              </div>
              {/* <!-- /.col-md-3--> */}
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }

  return <div>Required Login!</div>;
};

export default Cart;
