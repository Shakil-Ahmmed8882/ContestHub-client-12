import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useGetSecureData from '../../../Hooks/useGetSecureData';
import Spinner from '../../../Shared/Spinner';
import Searching from '../../Demo/Searching';
import HorizontalCard from './HorizontalCard';

const RegisteredContest = () => {
  const { user } = useAuth();
  const { data, isLoading, refetch } = useGetSecureData(
    `/user/participatedContests/${user?.email || user?.email}/''`
  );

  if (isLoading) return <Spinner />;

  const { attemptedContests } = data || {};

  if (!attemptedContests) return <Spinner />;

  refetch();

  return (
    <div>
      {attemptedContests.length > 0 ? (
        <div className="grid py-8 gap-8 md:grid-cols-2 mx-8 items-start">
          {attemptedContests.map(AtmContest => (
            <HorizontalCard key={AtmContest._id} contest={AtmContest} />
          ))}
        </div>
      ) : (
        <Searching />
      )}
    </div>
  );
};

export default RegisteredContest;