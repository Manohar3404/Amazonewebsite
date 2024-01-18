import { products} from "../data/products.js";
import { cart,remove1} from "../data/cart.js";
import { moneyformat } from './utils/money.js';
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
console.log('check',cart);
let checkouthtml='';
console.log(dayjs());
console.log(cart);
cart.forEach((cartitem)=>{
    let matchingproduct;
    products.forEach((product)=>{
        if (product.id===cartitem.id)
            matchingproduct=product;
    });
    // console.log('check',matchingproduct);
    checkouthtml+=
        `    <div class="cart-item-container-${matchingproduct.id}">
        <div class="delivery-date">
        Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
        <img class="product-image"
            src="${matchingproduct.image}">

        <div class="cart-item-details">
            <div class="product-name">
            ${matchingproduct.name}
            </div>
            <div class="product-price">
            $${moneyformat(matchingproduct.priceCents)}
            </div>
            <div class="product-quantity">
            <span>
                Quantity: <span class="quantity-label">${cartitem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
                Update
            </span>
            <span class="delete-quantity-link link-primary" data-product-id="${matchingproduct.id}">
                Delete
            </span>
            </div>
        </div>

        <div class="delivery-options">
            <div class="delivery-options-title">
            Choose a delivery option:
            </div>
            <div class="delivery-option">
            <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingproduct.id}">
            <div>
                <div class="delivery-option-date">
                Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                FREE Shipping
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingproduct.id}">
            <div>
                <div class="delivery-option-date">
                Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                $4.99 - Shipping
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingproduct.id}">
            <div>
                <div class="delivery-option-date">
                Monday, June 13
                </div>
                <div class="delivery-option-price">
                $9.99 - Shipping
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        `;
});

document.querySelector('.order-summary').innerHTML=checkouthtml;
document.querySelectorAll('.delete-quantity-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        remove1(productId);
        document.querySelector(`.cart-item-container-${productId}`).remove();
    });
});
