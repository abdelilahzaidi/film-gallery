import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import FilmItem from '../filmItem/filmItem';

export default function Principal() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getMovies = async () => {
        try {
            setError(false)
            setLoading(true)

            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2d736b2712a1889b09a7959c2d18559f&language=fr-FR');
            const json = await response.json();

            setData(json.results);
        } catch (error) {
            setError(true)
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {loading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <FilmItem film={item}>
                            
                        </FilmItem>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});