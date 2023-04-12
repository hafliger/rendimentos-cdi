import { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { LockClosedIcon } from "@heroicons/react/20/solid"

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}

export default function Modal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (
      data.email == "carolbond_cr@hotmail.com" &&
      data.password == "qrDNneTw3SY2f9"
    ) {
      setOpen(false)
    } else {
      console.log("acesso fudido")
    }
    console.log(data.email)
    console.log(data.password)
  }

  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

 
  return (
    <Transition.Root show={open} static={true} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                  <div className="w-full max-w-md space-y-8">
                    <div>
                      <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Acesse sua conta
                      </h2>
                      <p className="mt-2 text-center text-sm text-gray-600">
                        Faça seu login para vizualizar seu painel de
                        investimentos.{" "}
                      </p>
                    </div>
                    <form
                      className="mt-8 space-y-6"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                          <label htmlFor="email-address" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email-address"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Email address"
                            {...register("email")}
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Password"
                            {...register("password")}
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              aria-hidden="true"
                            />
                          </span>
                          Entrar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
