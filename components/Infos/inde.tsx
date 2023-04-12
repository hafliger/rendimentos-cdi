import { ArrowSmallUpIcon } from "@heroicons/react/24/outline"
export default function Infos() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg max-w-xl">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="font-bold leading-10 text-gray-900 text-xl">
          Informações de Investimeto CDI
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
        O CDI, ou Certificado de Depósito Interbancário, é uma taxa de juros utilizada nos empréstimos entre os bancos. Ela é usada como principal índice dos investimentos de renda fixa.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Nome do Investidor
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              CAROLINE DA SILVA BOND
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Produto</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              CDI
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Capital Investido
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              R$ 120.158,00
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Rentabilidade projetada
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              8%
            </dd>
          </div>

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Resumo de ganhos
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-200 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <ArrowSmallUpIcon
                      className="h-5 w-5 flex-shrink-0 text-green-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      Ganhos projeção Abril
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="ml-2 w-0 flex-1 truncate">R$ 845,00</span>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <ArrowSmallUpIcon
                      className="h-5 w-5 flex-shrink-0 text-green-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      Acumulado anual
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className="ml-2 w-0 flex-1 truncate">R$ 9.612,64</span>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
