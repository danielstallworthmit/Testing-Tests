export const SAVE_COMMENT = 'save_comment';

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}