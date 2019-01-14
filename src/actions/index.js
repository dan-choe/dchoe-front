
import jsonPlaceholder from '../API/jsonPlaceholder';
import _ from 'lodash';

export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const fetchPosts = () => {

    // return async function(dispatch, getState) {
    //     const response = await jsonPlaceholder.get('/posts');

    //     dispatch( {
    //         type: 'FETCH_POSTS',
    //         payload: response
    //     })
    // }    
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch( {
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }    
}

// BAD APPROACH - not return pure object from async
// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/posts');
//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     };
// }

export const selectPost = () => {

    return function(dispatch, getState) {
        const promise = jsonPlaceholder.get('/posts');

        return {
            type: 'SELECT_POST',
            payload: promise
        };
    }    
}


// export const fetchUser = id => async dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch( {
//         type: 'FETCH_USER',
//         payload: response.data
//     })
// }

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch( {
        type: 'FETCH_USER',
        payload: response.data
    })
});

// stil has issue
// export const fetchUser = function(id) {

//     return _.memoize(async function(dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);

//         dispatch( {
//             type: 'FETCH_USER',
//             payload: response.data
//         })
//     });
// };