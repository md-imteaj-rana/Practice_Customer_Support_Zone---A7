import React from 'react';

const TaskStatus = ({tasks, onCompleteTask, resolvedTasks}) => {
    return (
        <div className=' col-span-12 md:col-span-3'>
            <div className='task-status-container mb-10 mt-4'>
                <h2 className='mb-3 font-semibold text-2xl text-[#34485A]'>Task Status</h2>
                <div id='task-status-card' className="space-y-3">

                        {tasks.length === 0 ? (
                            <p className='text-[#627382]'>Select a ticket to add in Task Status</p>
                        ) : (
                            tasks.map((task, idx) => (
                            <div key={idx} className="card bg-gray-700 card-xs shadow-sm py-3">
                                <div className="card-body">
                                <h2 className="card-title pl-2">{task.title}</h2>
                                <div className="justify-end card-actions">
                                    <button onClick={()=> onCompleteTask(task)} className="btn w-full bg-blue-400 text-white">Complete</button>
                                </div>
                                </div>
                            </div>
                            ))
                        )}

                </div>
            </div>
            {}
            <div className='resolved-task-container'>
                <h2 className='mb-3 font-semibold text-2xl text-[#34485A]'>Resolved Task</h2>
                <div id='resolved-task-card' className="space-y-3">
                    {resolvedTasks.length === 0 ? (
                        <p className='text-[#627382]'>No resolved tasks yet.</p>
                    ) : (
                        resolvedTasks.map((task) => (
                        <div key={task.id} className="card bg-gray-700 card-xs shadow-sm py-2 pl-2">
                            <div className="card-body">
                            <h2 className="card-title">{task.title}</h2>
                            </div>
                        </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;