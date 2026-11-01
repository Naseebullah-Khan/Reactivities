using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
// using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities.Queries;

// public class GetActivityList
public static class GetActivityList
{
    public class Query : IRequest<List<Activity>>;

    // public class Handler(AppDbContext context, ILogger<GetActivityList> logger) : IRequestHandler<Query, List<Activity>>
    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
    {
        public Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            // try
            // {
            //     for (int i = 0; i < 10; i++)
            //     {
            //         cancellationToken.ThrowIfCancellationRequested();
            //         await Task.Delay(1000, cancellationToken);
            //         logger.LogInformation("Task {I} has completed", i);
            //     }
            // }
            // catch (Exception e)
            // {
            //     logger.LogInformation(e, "Task was cancelled");
            // }

            return context.Activities.ToListAsync(cancellationToken);
        }
    }
}
