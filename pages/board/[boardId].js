import { useRouter } from "next/router";
import React from "react";
import BoardComp from "../../sections/board/board";

const Board = () => {
    const router = useRouter();
    const { boardId } = router.query;

    return (
        <>
            <BoardComp boardId={boardId} />
        </>
    );
};

export default Board;
