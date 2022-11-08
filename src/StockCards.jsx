import React from 'react'

const StockCards = ({stock}) => {
  return (
    <div className="stock">
        { stock?.sentiment === 'Bullish' ? (
            <div className='bull-div'>
                <div>
                    {
                        stock?.sentiment === 'Bullish' ? (
                            <h2 className='bull'>{stock.ticker}</h2>
                        ) : (
                            <h2 className='bear'>{stock.ticker}</h2>
                        )
                    }
                    
                </div>
                <div>
                    <p>Comments: {stock.no_of_comments}</p>
                    <p>Sentiment: {stock.sentiment}</p>
                    <p>Sentiment Score: {stock.sentiment_score}</p>
                </div>
            </div>
        ) : (
            <div className='bear-div'>
                <div>
                    {
                        stock?.sentiment === 'Bullish' ? (
                            <h2 className='bull'>{stock.ticker}</h2>
                        ) : (
                            <h2 className='bear'>{stock.ticker}</h2>
                        )
                    }
                    
                </div>
                <div>
                    <p>Comments: {stock.no_of_comments}</p>
                    <p>Sentiment: {stock.sentiment}</p>
                    <p>Sentiment Score: {stock.sentiment_score}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default StockCards