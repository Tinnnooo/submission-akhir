import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BackHomeContainer } from '../components/styled/BackHomeContainer';
import { DetailPageContainer } from '../components/styled/DetailPageContainer';
import ThreadDetail from '../components/ThreadDetail';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralDownVoteThreadDetail,
  asyncToggleNeutralUpVoteThreadDetail,
  asyncToggleUpVoteThreadDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onCommentThread = (content) => {
    dispatch(asyncAddComment({ content, commentTo: id }));
  };

  const onLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleUpVoteThreadDetail(threadId));
  };

  const onDislikeThreadDetail = (threadId) => {
    dispatch(asyncToggleDownVoteThreadDetail(threadId));
  };

  const onNeutralLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleNeutralUpVoteThreadDetail(threadId));
  };

  const onNeutralDislikeDetail = (threadId) => {
    dispatch(asyncToggleNeutralDownVoteThreadDetail(threadId));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <DetailPageContainer>
      <BackHomeContainer>
        <Link to="/" className="link-home">Back</Link>
      </BackHomeContainer>
      <ThreadDetail
        {...threadDetail}
        authUser={authUser.id}
        like={onLikeThreadDetail}
        dislike={onDislikeThreadDetail}
        neutralLike={onNeutralLikeThreadDetail}
        neutralDislike={onNeutralDislikeDetail}
        addCommentThread={onCommentThread}
      />
    </DetailPageContainer>
  );
}

export default DetailPage;
