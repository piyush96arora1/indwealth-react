import React from 'react'
import FundService from '../Service/FundService'
import FundCard from './FundCard';
import Grid from '@material-ui/core/Grid';
import Style from '../Styles/Style'
import InfiniteLoader from 'react-infinite-loader'

export class CardProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = { fund: [], records: 0 ,hasError:false}
    }
    componentDidMount() {
        this.getMutualFundData();
    }
    getMutualFundData = () => {
        FundService.getMutualFunds(this.state.fund.length).then((responseData) => {
            let mergedData = this.state.fund.concat(responseData.data)
            this.setState({
                fund: mergedData,
                records: responseData.count
            })


        }).catch((response)=>{
            this.setState({hasError:true})
        })
    }
    onEndVisit = () => {

        this.getMutualFundData();
    }

    render() {
        let fundCards = (this.state.fund.map(card => <FundCard key={card.id} fund={card} />))
        let noRecords = this.state.fund.length <= 0 ? Style.LoaderPostion : {}
        let view;
        if(!this.state.hasError)
        {
            view=( <React.Fragment>
                {this.state.records > 0 && <Grid container style={Style.BoldFont}  direction='column'>
                    <Grid item>Explore Funds</Grid>
                    <Grid item>Showing {this.state.records} funds </Grid>
                </Grid>}
                {this.state.fund.length > 0 && 
                <Grid container spacing={0} >

                    {fundCards}
                </Grid>}
                <div className="layout-row layout-align-center-center">
                    <div style={noRecords} className="flex" >
                        <InfiniteLoader onVisited={this.onEndVisit} loaderStyle={Style.InfiniteLoader} />
                    </div>
                </div>




            </React.Fragment>)
        }
        else{
            view=(<div>Error from service</div>)
        }
        return (
            <React.Fragment>{view}</React.Fragment>
            
           
        )

    }


}

export default CardProvider