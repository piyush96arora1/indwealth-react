import React from 'react'
import Style from '../Styles/Style'
import { Card } from '@material-ui/core'
import StarRatingComponent from 'react-star-rating-component';

export class FundCard extends React.Component {

    render() {
        let returnVal = this.props.fund.returns.oneYear ? this.props.fund.returns.oneYear.toFixed(2) : 0
        let returnStyle = returnVal >= 0 ? Style.PositiveReturn : Style.NegetiveReturn
        let returnValue = returnVal >= 0 ? `+${returnVal}%` : `${returnVal}%`;

        return (
            <React.Fragment>
                <Card style={Style.RootCard} className=" layout-column flex-70 layout-padding layout-margin">
                    <div className="layout-row flex-70 layout-align-space-between-center">
                        <span style={Style.CardHeading} className="flex-75">{this.props.fund.name}</span>
                        <span style={Style.Stars} className="flex-25">
                            <StarRatingComponent
                                name="ratings"
                                editing={false}

                                starCount={this.props.fund.rating}
                                value={this.props.fund.rating} />
                        </span>
                    </div>
                    <div className="layout-row layout-margin">
                        <span style={Style.SmallDesign} className="">{this.props.fund.planType}</span>
                        <span style={Style.SmallDesign} className="">{this.props.fund.risk}</span>
                    </div>
                    <div className="layout-row flex-30">
                        <div className="layout-column flex">
                            <span style={Style.Heading}>1 yr returns</span>
                            <span style={returnStyle}>{returnValue}</span>
                        </div>
                        <div className="layout-column flex">
                            <span style={Style.Heading} > AUM</span>
                            <span style={Style.BoldFont}>{`₹${this.props.fund.aum} Cr`}</span>
                        </div>
                        <div className="layout-column flex">
                            <span style={Style.Heading}>Expense Ratio</span>
                            <span style={Style.BoldFont}>{`${this.props.fund.expenseRatio}%`}</span>
                        </div>
                        

                    </div>
                </Card>
            </React.Fragment>

        )
    }


}
export default FundCard