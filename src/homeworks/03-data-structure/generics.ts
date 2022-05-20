export enum TaskType {
    feature = 'feature',
    bug ="bug"
}

export type Task<T = TaskType> = {
    name: string;
    type: T;
}

const whatever: Task = {
    name: 'something',
    type: TaskType.feature
}
whatever.type = TaskType.bug // fine cause it can be either both

type FeatureTask = Task<TaskType.feature>

const feature: FeatureTask = {
    name: 'ds',
    type: TaskType.feature
}

//feature.type = TaskType.bug  generates error because the type is featuyre always