import React from 'react'
import PropTypes from 'prop-types'

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <h2 className="text-3xl my-4 font-bold card-title">
        Latest Repositories
      </h2>
      {repos.map((repo) => (
        <h3 key={repo.id}>{repo.name}</h3>
      ))}
    </div>
  )
}

RepoList.defaultProps = {
  title: 'Github Finder',
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList
