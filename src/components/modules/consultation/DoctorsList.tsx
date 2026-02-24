/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { getDoctors } from '@/app/(commonLayout)/consultation/_actions'
import { useQuery } from '@tanstack/react-query'

const DoctorsList = () => {
  const {data} = useQuery({
    queryKey: ['doctors'],
    queryFn: () => getDoctors(),
  });
  return (
    <div>
      <h1>Doctors List</h1>
      {data && (
        <ul>
          {data.data.map((doctor: any) => (
            <li key={doctor.id}>{doctor.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DoctorsList