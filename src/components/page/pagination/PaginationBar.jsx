import React from 'react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import PaginationButton from './PaginationButton';
import PaginationButtonArrow from './PaginationButtonArrow';

function PaginationBar({ page, numPages, setPage }) {

  return (
    <div className="flex row justify-center m-3">
      <PaginationButtonArrow page={page} setPage={setPage} IconArrow={IconArrowLeft} direction={'<'} />
      <PaginationButton page={page} setPage={setPage} numPages={numPages} />
      <PaginationButtonArrow page={page} setPage={setPage} IconArrow={IconArrowRight} direction={'>'} />
    </div>
  )
}

export default PaginationBar