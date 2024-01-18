/**
 * WordPress dependencies
 */
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Custom hook that fetches data from the specified URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @return {Object} - An object containing the fetched data, loading state, and error state.
 */
const useFetch = ( url ) => {
	const [ data, setData ] = useState( [] );
	const [ loading, setLoading ] = useState( false );
	const [ error, setError ] = useState( null );

	useEffect( () => {
		/**
		 * Fetches data from the specified URL asynchronously.
		 *
		 * @return {Promise<void>} - A Promise that resolves when the data has been fetched and processed.
		 */
		const fetchData = async () => {
			if ( ! url || typeof url !== 'string' ) {
				setError( __( 'Please Enter a valid URL.', 'mindwell' ) );
				return;
			}

			setLoading( true );
			try {
				const response = await fetch( url );
				if ( ! response.ok ) {
					throw new Error( __( 'Failed to fetch data', 'mindwell' ) );
				}
				let responseData;
				try {
					responseData = await response.json();
				} catch ( err ) {
					throw new Error(
						__( 'API response is not valid', 'mindwell' )
					);
				}
				setError( null );
				setData( responseData );
			} catch ( err ) {
				setError(
					err.message || __( 'Something went wrong', 'mindwell' )
				);
			} finally {
				setLoading( false );
			}
		};

		fetchData();

		// Cleanup function to reset data and error on unmount or URL change
		return () => {
			setData( [] );
			setError( null );
		};
	}, [ url ] );

	return { data, loading, error };
};

export default useFetch;
