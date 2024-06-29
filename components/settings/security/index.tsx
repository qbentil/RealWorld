import * as Yup from 'yup';

import { IUser } from '@/interface';
import { LockCircle } from 'iconsax-react'
import React from 'react'
import TextInput from '@/components/core/text-input';
import UserService from '@/services/user.service';
import toasts from '@/utils/toasts';
import { useFormik } from 'formik'
import { useStateValue } from '@/context/StateProvider';

const PasswordChangeInitialState = {
  password: '',
  newPassword: '',
  confirmPassword: '',
}
const CHangepassword = () => {
  const [{ user }, dispatch] = useStateValue()
  const [loading, setLoading] = React.useState<boolean>(false)
  const { handleSubmit, ...form } = useFormik({
    initialValues: PasswordChangeInitialState,
    validationSchema: Yup.object().shape({
      password: Yup.string().required(),
      newPassword: Yup.string().min(8).max(12).required(),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), ""], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      setLoading(true)
      const updated: IUser = {
        ...user,
        password: values.newPassword,
      }
      UserService.update(updated, (error, data) => {
        setLoading(false)
        if (error) {
          console.log({ error })
          toasts.error("Error", error)
          return
        }
        toasts.success("Success", "Password updated successfully")
      })
    }
  })

  return (
    <div className='w-full flex items-center justify-center py-2'>
      <div className='w-full md:w-1/2 px-4 border rounded py-2'>
        <div className='text-sm gap-x-2 border-b font-semibold text-gray-700 mb-4 flex flex-row-reverse justify-end py-4 items-center w-full'>
          Change Password
          <LockCircle />
        </div>
        <form method='post' onSubmit={handleSubmit} className='w-full flex flex-col gap-y-4'>
          <div className='w-full flex flex-col gap-y-2'>
            <TextInput
              id="password"
              label="Current password"
              type="password"
              placeholder='************'
              {...form}
            />
          </div>
          <div className='w-full flex flex-col gap-y-2'>
            <TextInput
              id="newPassword"
              label="New password"
              type="password"
              placeholder='************'
              {...form}
            />
          </div>
          <div className='w-full flex flex-col gap-y-2'>
            <TextInput
              id="confirmPassword"
              label="Confirm password"
              type="password"
              placeholder='************'
              {...form}
            />
          </div>
          <div className='w-full flex justify-end'>
            <button disabled={loading} className='bg-primary-600 text-white px-4 py-2 rounded-md disabled:cursor-not-allowed'>
              {loading ? "Hang on..." : "Change Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CHangepassword