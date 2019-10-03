import dataLoader from '../API/dataLoader';
import _ from 'lodash';


export const toggle_theme = theme => {
    return {
        type: 'TOGGLE_THEME',
        payload: theme
    }
}

export const toggle_sidebar = status => {
    return {
        type: 'TOGGLE_SIDEBAR',
        payload: status
    }
}

export const select_page = pageInfo => {
    return {
        type: 'SELECT_PAGE',
        payload: pageInfo
    };
};






export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

// localhost:8080/notes/page?page=1&page-size=2
// export const fetchNotes = (page=1, page_size=1) => {
//    return async dispatch => {
//         const response = await dataLoader.get(`/notes/page?page=${page}&page-size=${page_size}`);
//         dispatch( {
//             type: 'FETCH_NOTES',
//             payload: response.data
//         })
//     }    
// }

export const fetchPosts = () => {

    // return async function(dispatch, getState) {
    //     const response = await jsonPlaceholder.get('/posts');

    //     dispatch( {
    //         type: 'FETCH_POSTS',
    //         payload: response
    //     })
    // }    
    return async dispatch => {
        const response = await dataLoader.get('/posts');

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
        const promise = dataLoader.get('/posts');

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
    const response = await dataLoader.get(`/users/${id}`);

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