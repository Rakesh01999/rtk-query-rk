import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { updateFilter } from "@/redux/features/task/taskSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  console.log({ data, isLoading, isError });

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Tasks </h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              value="High"
            >
              high
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
