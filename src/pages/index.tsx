import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const listTab = [
  {
    name: 'All',
    value: 'all',
    status: ['pending', 'completed'],
  },
  {
    name: 'Pending',
    value: 'pending',
    status: ['pending'],
  },
  {
    name: 'Completed',
    value: 'completed',
    status: ['completed'],
  },
]

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="max-h-screen rounded-12 bg-white p-8 shadow-sm transition-all duration-700 ease-in-out">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root defaultValue="all">
          <Tabs.List className="mt-10 flex w-full flex-row items-center gap-2 ">
            {listTab.map((item, index) => {
              return (
                <Tabs.Trigger
                  key={index}
                  value={item.value}
                  className="flex max-h-11 shrink-0 flex-col items-center justify-center rounded-full border transition-all duration-300 ease-in-out data-[state=inactive]:border-gray-300 data-[state=active]:bg-gray-700 data-[state=active]:text-white "
                >
                  <div className="px-6 py-3 text-center text-sm font-bold leading-[20px]">
                    {item.name}
                  </div>
                </Tabs.Trigger>
              )
            })}
          </Tabs.List>

          <div className="pt-10">
            {listTab.map((item, index) => {
              return (
                <Tabs.Content
                  key={index}
                  value={item.value}
                  className="opacity-0 transition-all duration-500 ease-in-out data-[state=active]:opacity-100"
                  hidden={false}
                >
                  <TodoList valueStatus={item.status} />
                </Tabs.Content>
              )
            })}
          </div>
        </Tabs.Root>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
