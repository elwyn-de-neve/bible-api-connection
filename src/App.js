import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

    // API variables
    const API_KEY = ""

    // State variables
    const [ data, setData ] = useState( [] )
    const [ loading, setLoading ] = useState( false )
    const [ error, setError ] = useState( false )

    // Async function
    useEffect( () => {
        async function fetchData() {
            setError( false )
            try {
                setLoading( true )
                const response = await axios.get( 'https://api.scripture.api.bible/v1/bibles', {
                    // Header data (must have API Key)
                    headers: {
                        'api-key': API_KEY,
                    },
                    // Add all params here...
                    params: {

                    }
                } )
                console.log( response.data.data )
                setData( response.data.data )
            } catch ( e ) {
                    console.error( e )
                    setError( true )
            } finally {
                setLoading( false )
            }
        }

        // Invoke function
        void fetchData()
    }, [] )

    return (
        <div>
            { error && <p>Er is iets mis gegaan</p> }
            { loading && <p>Loading...</p> }
            { data.map( ( bible ) => {
                return (
                    <p key={ bible.id }>
                        { bible.name }
                    </p>
                )
            } ) }
        </div>
    );
}

export default App;
