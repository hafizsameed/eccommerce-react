import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../productIndex";




const DataContainer = ({ Data, fetchData, loading, error }) => {
    useEffect(() => {
        fetchData()
    }, [])
    console.log('data container', Data)
    return (loading ? (
        <h2>loading</h2>
    ) : error ? (
        <h2>{error}</h2>
    ) : (
        <div>
            {Data && Data.map(product => <p>{product.title}</p>)}
        </div>
    )

    );
}


const mapStateToProps = state => {
    return {
        Data: state.data,
        loading: state.loading,
        error: state.error
    }
}

const mapDisptachToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}


export default connect(mapStateToProps, mapDisptachToProps)(DataContainer);