import React from 'react'
import Style from '../Styles/Style'
import { Card } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import StarRatingComponent from 'react-star-rating-component';

export class FundCard extends React.Component {

    render() {
        let returnVal = this.props.fund.returns.oneYear ? this.props.fund.returns.oneYear.toFixed(2) : 0
        let returnStyle = returnVal >= 0 ? Style.PositiveReturn : Style.NegetiveReturn
        let returnValue = returnVal >= 0 ? `+${returnVal}%` : `${returnVal}%`;

        return (
            <React.Fragment>
                <Grid item xs={12} md={6} lg={6} >
                <Card style={Style.RootCard}>
                <Grid container direction='column' spacing={16} style={{padding:`1rem`}}>
                <Grid item>
                    <Grid container spacing={8} >
                        <Grid item xs={10}style={Style.CardHeading}>{this.props.fund.name}</Grid>
                        <Grid item xs={2}style={Style.Stars} >
                            <StarRatingComponent
                                name="ratings"
                                editing={false}

                                starCount={this.props.fund.rating}
                                value={this.props.fund.rating} />
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item>
                    <Grid container spacing={16}>
                        <Grid item={Style.SmallDesign} className="">{this.props.fund.planType}</Grid>
                        <Grid item={Style.SmallDesign} className="">{this.props.fund.risk}</Grid>
                    </Grid>
                    </Grid>
                    <Grid item>
                    <Grid container spacing={32} >
                        <Grid item xs={4}>
                            <Grid item={Style.Heading}>1 yr returns</Grid>
                            <Grid item={returnStyle}>{returnValue}</Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid item style={Style.Heading} > AUM</Grid>
                            <Grid item style={Style.BoldFont}>{`₹${this.props.fund.aum} Cr`}</Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid item style={Style.Heading}>Expense Ratio</Grid>
                            <Grid item style={Style.BoldFont}>{`${this.props.fund.expenseRatio}%`}</Grid>
                        </Grid>
                
                    </Grid>
                    </Grid>
                    </Grid>
                </Card>
                </Grid>
            </React.Fragment>

        )
    }


}
export default FundCard