'use client'
import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import { useLocalStorage } from 'usehooks-ts'
import { TatumConfig } from '../dto'
import { Network } from '@tatumcom/js'
import { Table } from '../components/table'
import { useModal } from '../components/modal'

const Home: NextPage = () => {
  return (
    <div className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
      <h1
        className='text-8xl my-5'>
        Tatum SDK
      </h1>
      <div className='flex gap-5 max-w-5xl sm:grid-cols-3 justify-center py-10'>
        <Well link='notifications' title='Notifications' description='Subscribe to notifications for an address!' />
        <Well link='nfts' title='NFTs' description='Mint NFTs in seconds!' inactive={true} />
        <Well link='fees' title='Fees' description='Estimate fees!' inactive={true} />
      </div>
      <ApiKeys />

    </div>
  )
}

const ApiKeys = () => {

  const [apiKeys, setApiKeys] = useLocalStorage<TatumConfig[]>('apiKeys', [
    {
      apiKey: '452826a8-5cd4-4c46-b710-e130934b5102',
      network: Network.Testnet,
      active: true,
    },
  ])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const data = new FormData(e.target as HTMLFormElement)
    const apiKey = data.get('apiKey') as string
    const network = data.get('network') as Network
    setApiKeys([...apiKeys, { apiKey, network, active: false }])
    setLoading(false)
  }

  const { setLoading, Modal } = useModal({
    handleSubmit,
    buttonText: 'Add Api Key',
    modalTitle: 'Add Api Key',
    inputs: {
      text: [
        {
          id: 'apiKey',
          label: 'Api Key',
          placeholder: 'Api Key',
        },
      ],
      select: [
        {
          id: 'network',
          label: 'Network',
          options: [
            {
              label: 'Testnet',
              value: Network.Testnet,
            },
            {
              label: 'Mainnet',
              value: Network.Mainnet,
            },
          ],
        }],
    },
  })

  const activate = (config: TatumConfig) => {
    console.log(config)
    setApiKeys(apiKeys.map(key => {
      if (key.apiKey === config.apiKey) {
        return {
          ...key,
          active: true,
        }
      }
      return {
        ...key,
        active: false,
      }
    }))
  }

  const apiKeysTable = [
    {
      name: 'apiKey',
      label: 'Api Key',
    },
    {
      name: 'network',
      label: 'Network',
    },
    {
      name: 'active',
      label: 'Active',
    }
  ]
  return (
    <>
      <h3
        className='text-3xl my-5'>
        Api Keys
      </h3>
      <div className='w-1/2'>
        <Table attributes={apiKeysTable} data={apiKeys} offset={0} setOffset={() => {
        }} isLoading={false} hidePagination={true} actions={{activate}} />
      </div>
      {Modal}
    </>
  )
}

const Well = ({
                link,
                title,
                description,
                inactive,
              }: { link: string, title: string, description: string, inactive?: boolean }) => {
  if (inactive) {
    return <div
      className='flex justify-center w-4/12 bg-gradient-to-r card dark:from-blue-800 dark:text-white dark:to-purple-800 p-5 rounded-xl bg-slate-200 transform transition'>
      <div>
        <div className='font-bold mb-2 mt-4 text-lg'>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  }
  return <div
    className='flex justify-center w-4/12 bg-gradient-to-r card dark:from-blue-800 dark:text-white dark:to-purple-800 from-blue-200 hover:scale-105 p-5 rounded-xl to-purple-200 transform transition'>
    <Link href={link}>
      <div className='font-bold mb-2 mt-4 text-lg'>{title}</div>
      <div>{description}</div>
    </Link>
  </div>
}


export default Home