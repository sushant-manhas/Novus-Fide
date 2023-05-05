function CampainCard() {
  return (
    <div className='campain-card'>
          <div className='card-details'>
            <div>
              <p className='campain-card-title'>
                Welcome Cure
              </p>
            <p className='campain-card-subtitle'>
            discounting 
          </p>
          </div>
          <div>
            <div className="min-amount">Min. Subscription</div>
            <div className="min-amount">10,000</div>
          </div>
          </div>
          <div className='campain-offer'>
            <span className="discount-rate">13.6% Discount Rate</span>
            <span className="repayment-price">Repayment/unit 10,130</span>
          </div>
        </div>
      )
}

export default CampainCard