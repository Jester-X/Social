import profileReducer, {addProfilePost} from "./profile-reducer";



test.todo('posts length should be incremented'), ()=> {
    // 1.test data
    let action = addProfilePost('Vladik tester')

    let state = {
        posts: [
            {id: 1, message: 'Im the first user', likesCount: '1'},
            {id: 2, message: 'Im so alone', likesCount: '0'}
        ],
    }
    // action
    let newState = profileReducer(state,action)

    //expectation
    expect(newState.posts.length).toBe(5)
}

test.todo('after deleting length of posts should decrement'), ()=> {
    // 1.test data
    let action = addProfilePost('Vladik tester')

    let state = {
        posts: [
            {id: 1, message: 'Im the first user', likesCount: '1'},
            {id: 2, message: 'Im so alone', likesCount: '0'}
        ],
    }
    // action
    let newState = profileReducer(state,action)

    //expectation
    expect(newState.posts.length).toBe(5)
}