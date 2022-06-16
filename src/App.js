import React, { useEffect, useState } from "react";
import './App.css';
import translation_svg from './static/media/translation.89025504.svg';
import user_svg from './static/media/defaultUserDp.3e1b0347.svg';
import connect_svg from './static/media/connect.a12a1b85.svg';
import contact_svg from './static/media/contact.ba3c3141.svg';
import interested_svg from './static/media/interested.59b385b4.svg';
import whatsapp_svg from './static/media/whatsappLogo.ef512021.svg';
import details_svg from './static/media/seeDetailsDots.802d07fd.svg';
import data from './static/data.json'


function App(){
  return (
    <div class="App">
      <div class="app__container">
        <div class="profile__container">
          <div class="navbar">
            <h1>Profile</h1>
            <button class="navbar__translation">
              <img src={translation_svg} alt="translation"/>
            </button>
          </div>
          <div class="profile">
            <div class="contact-details">
              <div class="contact-details__display_pic">
                <img src={user_svg} alt="profile_pic"/>
              </div>
              <div class="contact-details__info">
              
                <div class="contact-details__info--bio">
                  <span class="contact-details__info--name" data-testid="contact-name">{data.name}</span>
                  <span class="contact-details__info--location" data-testid="contact-location">{data.loclevel3Name}, {data.loclevel2Name}</span>
                  <span class="contact-details__info--language" data-testid="contact-language">Speaks English</span>
                </div>
                
                <div class="contact-details__buttons">
                  <button class="action-button action-button-md" type="button" >
                    <img src={connect_svg} alt="Connect"/>
                    <span>Connect</span>
                  </button>
                  <button class="action-button action-button-md" type="button" >
                    <img src={contact_svg} alt="Contact"/>
                    <span>Contact</span>
                  </button>
                </div>
              </div>
              <div class="share-profile">
                <button class="share-button share-button-sm">
                  <img src={whatsapp_svg} alt="Share"/>
                  <span>Share</span>
                </button>
              </div>
            </div>
            <div class="profile-choice">
              <button class="profile-choice-btn-active">Business</button>
              <button class="">Review</button>
            </div>
            <div class="profile-view">
              <div class="profile-business">
                <div class="business-details">
                  <h4 class="business-details__profession" data-testid="profession">Commission Agent</h4>
                  <div class="business-details__info">

                    <div>
                      <div class="business-details__info-key" data-testid="market">Market Name</div>
                      <div class="business-details__info-value">{data.business.marketStdName}</div>
                    </div>
                    <div>
                      <div class="business-details__info-key" data-testid="market">Firm Name</div>
                      <div class="business-details__info-value">{data.business.firmName}</div>
                    </div>
                    <div>
                      <div class="business-details__info-key" data-testid="market">Shop Number</div>
                      <div class="business-details__info-value">{data.business.mandiShopnum}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="products-heading">
                    <h4>Products</h4>
                  </div>
                  {data.products && data.products.map((product) => {
                    return(
                      <div>
                      <div class="product">
                      <div class="product__info">
                        <div class="product__display">
                          <img height="95" width="95" src={"https://gramoday-images-public.s3.ap-south-1.amazonaws.com/commodity/"+product.picUrl} alt="Product"/>
                        </div>
                        <div class="product__details">
                          <span class="product__details-name">{product.cmdtyStdName}</span>
                          <span class="product__details-mandi-name">{product.posts.at(0).marketStdName}, {product.posts.at(0).loclevel3Name}, {product.posts.at(0).loclevel2ShortName}</span>
                          <span class="product__details-date">{Date(product.updatedAt)}</span>
                          <span class="product__details-weight">₹ {product.posts.at(0).computed.highestAvgPriceVarietyGrade.minPrice} - {product.posts.at(0).computed.highestAvgPriceVarietyGrade.maxPrice} / {product.posts.at(0).rawPriceConvFctr} {product.posts.at(0).rawReportPriceUnit}</span>
                          <div class="product-date">Updated at {Date(product.updatedAt)}</div>
                        </div>
                        <button class="product__see-details">
                          <img alt="See details" src={details_svg}/>
                        </button>
                      </div>
                      <hr class="product-hr"/>
                      <div class="product-buttons">
                        <button class="share-button share-button-md">
                          <img src={whatsapp_svg} alt="Share"/>
                          <span>Share</span>
                        </button>
                        <button class="action-button action-button-md" type="button">
                          <img src={interested_svg} alt="Interested"/>
                          <span >Interested</span>
                        </button>
                      </div>
                    </div>
                  </div>
                        
                )})}
                    
                </div>
              </div>
              <div>
                <div >
                  <div class="share-card__play-store-card">
                    <div>
                      <span>Join the agricultural community</span>
                    </div>
                    <div>
                      <a href="https://play.google.com/store/apps/details?id=net.gramoday.agriculture">Download Gramodaya</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
