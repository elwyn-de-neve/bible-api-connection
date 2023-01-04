import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [ data, setData ] = useState( [] )
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    async function fetchData() {
        setError( false )
        try {
            setLoading( true )
            const response = await axios.get( 'https://jsonplaceholder.typicode.com/users' )
            setData( response.data )
            console.log(data)
        } catch ( e ) {
            console.error( e )
            setError( true )
        } finally {
            setLoading( false )
        }
    }

    useEffect( () => {
        void fetchData()
    }, [] )


    return (
        <div>
            { error && <p>Er is iets mis gegaan</p> }
            { loading && <p>Loading...</p> }
            { data.map( ( user ) => {
                return (
                    <p key={ user.id }>
                        { user.name }
                    </p>
                )
            } ) }
        </div>
    );
}

export default App;
