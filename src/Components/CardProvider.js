import React from 'react'
import FundService from '../Service/FundService'
import FundCard from './FundCard';
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
            let mergedData = this.state.fund.concat(responseData.data.data)
            this.setState({
                fund: mergedData,
                records: responseData.data.count
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
                {this.state.records > 0 && <div style={Style.BoldFont} className="layout-column layout-pading layout-margin">
                    <span>Explore Funds</span>
                    <span>Showing {this.state.records} funds </span>
                </div>}
                {this.state.fund.length > 0 && <div className="layout-row layout-xs-column layout-wrap layout-xs-column">

                    {fundCards}
                </div>}
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