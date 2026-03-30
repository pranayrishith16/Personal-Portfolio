export const posts = [
  {
    slug: 'batch-vs-stream-processing',
    title: "Day 16: Explaining ML's Neglected Concepts - 𝗕𝗮𝘁𝗰𝗵 𝘃𝘀. 𝗦𝘁𝗿𝗲𝗮𝗺 𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴",
    date: 'Recent',
    readTime: '2 min read',
    category: 'Data Engineering',
    excerpt: "Most tutorials teach you batch. Most jobs eventually need stream. They're not just different speeds. They're different assumptions about when data shows up.",
    content: `
Day 16: Explaining ML's Neglected Concepts - 𝗕𝗮𝘁𝗰𝗵 𝘃𝘀. 𝗦𝘁𝗿𝗲𝗮𝗺 𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴 Most tutorials teach you batch. Most jobs eventually need stream.
They're not just different speeds. They're different assumptions about when data shows up and how late a prediction can be before it's useless.

What actually happens:
 • Batch collects data over a window, runs the job, then sits idle until the next one.
 • Stream processes each event as it lands -> usually within milliseconds.
 • The real difference isn't latency, it's how you handle state and what happens when something fails mid-job.
 • Batch is cheaper and easier to reason about; stream is harder to build and harder to debug.

Key approaches in practice:
 • Spark does batch well and stream via micro-batches, which isn't true streaming but covers a lot of cases.
 • Flink is built for genuine event-time streaming with stateful operations across long windows.
 • Kafka sits in front of both - it's a buffer, not a processor, and people mix this up constantly.
 • Lambda architecture runs both in parallel, which sounds smart until you're maintaining two codebases forever.

What happens in real stacks:
 • Fraud detection runs on stream -> by the time a batch job finishes, the transaction already cleared.
 • Model retraining almost always stays batch; nobody retrains on every single row.
 • Feature stores bridge the gap, serving precomputed batch features alongside live ones at inference time.
 • Most teams start batch, add stream later, and spend months untangling the consistency issues that creates.

Have you ever had to migrate a batch pipeline to stream mid-production? How'd it go?

hashtag#MachineLearning hashtag#DataEngineering hashtag#MLOps hashtag#StreamProcessing hashtag#DataScience
    `
  },

  {
    slug: 'olap-analytical-processing',
    title: "Day 15: Explaining ML's Neglected Concepts - 𝗢𝗟𝗔𝗣",
    date: 'Recent',
    readTime: '2 min read',
    category: 'Data Engineering',
    excerpt: 'The reason your "fast" database still can\'t answer a simple analytics question. You trained the model. The pipeline runs. Then someone asks a question and your stack chokes.',
    content: `
Day 15: Explaining ML's Neglected Concepts
𝗢𝗟𝗔𝗣 (𝗢𝗻𝗹𝗶𝗻𝗲 𝗔𝗻𝗮𝗹𝘆𝘁𝗶𝗰𝗮𝗹 𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴): The reason your "fast" database still can't answer a simple analytics question
You trained the model. The pipeline runs. Then someone asks "show me weekly accuracy by region by data source" - and your stack chokes.
The query isn't complex. The database is just the wrong shape.

What actually happens:
 • OLTP databases optimize for row-level writes - analytics queries are the opposite workload entirely.
 • OLAP systems pre-organize data into columnar formats so aggregations scan only the fields they need.
 • A "cube" is a mental model: slice by time, dice by category, drill down or roll up on demand.
 • The query that took 40 seconds on Postgres runs in 400ms on a columnar store - same data, different physics.

Key approaches in practice:
 • Star schemas denormalize intentionally, trading storage for join-free query speed.
 • Materialized views precompute expensive aggregations so dashboards don't recompute on every load.
 • Partitioning by time column is often the single highest-leverage OLAP optimization.

What happens in real stacks:
 • BigQuery, Snowflake, Redshift, and DuckDB are all columnar OLAP engines under the hood.
 • ML teams hit OLAP limits first when building feature stores or evaluation dashboards at scale.
 • Hybrid Transactional/Analytical Processing (HTAP) is closing the gap - but most teams don't need it yet.

Your model metrics are only as queryable as your data architecture allows.
    `
  },

  {
    slug: 'oltp-transaction-processing',
    title: "Day 14: Explaining ML's Neglected Concepts - 𝗢𝗟𝗧𝗣",
    date: 'Recent',
    readTime: '2 min read',
    category: 'Data Engineering',
    excerpt: "Most ML engineers interact with OLTP systems every day and still can't explain what makes them different. It's the database layer built to power live applications.",
    content: `
Day 14: Explaining ML's Neglected Concepts - 𝗢𝗟𝗧𝗣
Most ML engineers interact with OLTP systems every day and still can't explain what makes them different.
OLTP - 𝗢𝗻𝗹𝗶𝗻𝗲 𝗧𝗿𝗮𝗻𝘀𝗮𝗰𝘁𝗶𝗼𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴 - is the database layer built to power live applications: every login, purchase, and form submission hitting your DB in real time.

What actually happens:
 • OLTP handles thousands of small, fast read/write operations per second - inserts, updates, deletes, not bulk scans.
 • It's optimized for row-level access, so the wide column reads your training jobs need are genuinely slow on it.
 • ACID guarantees (atomicity, consistency, isolation, durability) keep app data correct but add overhead batch pipelines fight constantly.
 • Normalized schemas reduce write redundancy - and force 6-table joins before a single training row exists.

Key approaches in practice:
 • CDC (Change Data Capture) reads from the transaction log directly - so training pipelines don't hammer the live DB.
 • Incremental snapshots pull changes into a staging layer before any feature engineering touches the data.
 • Read replicas offload query load but don't fix the schema mismatch problem.

What happens in real stacks:
 • Most teams run Postgres → Kafka → data warehouse, then train only on the warehouse.
 • Feature stores cache pre-computed values so inference never hits OLTP at query time.
 • Skip this separation and training-serving skew shows up at 2am.

Built for writes, not models. That gap needs an explicit design decision.

What does your OLTP-to-feature pipeline look like - homegrown ETL or something managed?
    `
  },

  {
    slug: 'issues-of-continual-learning',
    title: "Day 13: Explaining ML's Neglected Concepts - 𝗜𝘀𝘀𝘂𝗲𝘀 𝗼𝗳 𝗖𝗼𝗻𝘁𝗶𝗻𝘂𝗮𝗹 𝗟𝗲𝗮𝗿𝗻𝗶𝗻𝗴",
    date: 'Recent',
    readTime: '2 min read',
    category: 'Machine Learning',
    excerpt: "Continual learning looks clean in research. Shipping it is a different conversation. Your data stream doesn't tell you when the distribution shifted - you find out when accuracy drops.",
    content: `
Day 13: Explaining ML's Neglected Concepts
𝗜𝘀𝘀𝘂𝗲𝘀 𝗼𝗳 𝗖𝗼𝗻𝘁𝗶𝗻𝘂𝗮𝗹 𝗟𝗲𝗮𝗿𝗻𝗶𝗻𝗴 -> Continual learning looks clean in research. Shipping it is a different conversation.

What actually happens:
 • Your data stream doesn't tell you when the distribution shifted - you find out when accuracy drops.
 • Replay buffers sound simple until legal asks what user data you're storing for retraining.
 • The model stabilizes on early tasks, then quietly degrades as new ones pile up.
 • Papers benchmark on final accuracy; production cares whether the model still works six months later.

Key issues in practice:
 • Elastic Weight Consolidation protection weakens over time as the model drifts away from where those weights mattered.
 • Most methods just try not to forget - almost none help old knowledge actually improve new tasks.
 • Every replay cycle bakes dataset bias a little deeper into the weights.

What happens in real stacks:
 • Healthcare and finance are the obvious Continual Learning use cases. Both ban storing old examples for replay.
 • Teams scope the domain tighter and tighter to avoid drift - which is avoiding the problem, not solving it.
 • Most shops hit a wall early and go back to full retraining on a schedule.

The research is years ahead of what teams can actually deploy.

Where did CL break down for you - data, privacy, or just the complexity of keeping it stable?
    `
  },

  {
    slug: 'scaling-rag-pipelines',
    title: 'Scaling RAG Pipelines in Production',
    date: 'Oct 24, 2025',
    readTime: '6 min read',
    excerpt: 'Lessons learned from serving 100+ concurrent vector search queries per second without melting the database.',
    category: 'GenAI',
    content: `
# Scaling RAG Pipelines in Production

When we first built our Retrieval-Augmented Generation (RAG) system, we used a naive approach: a single LangChain retrieval chain connected to a small vector database. It worked beautifully for 5 users. 

When we scaled to 5,000 users, everything broke.

## The Bottleneck

The immediate issue wasn't the LLM generation speed—it was the retrieval phase. Our vector database was being hit with deeply complex semantic searches that took hundreds of milliseconds to resolve. When 100 users searched simultaneously, the request queue backed up, causing timeout errors.

## The Solution: Asynchronous Retrieval & Caching

We completely re-architected the pipeline:

1. \`Semantic Caching\`: We introduced a Redis-based semantic cache. If a new query had a 95% cosine similarity to a recently answered query, we bypassed the vector search and LLM entirely, returning the cached response in <10ms.
2. \`Async Endpoints\`: We rewrote the LangChain synchronous calls using FastAPI's asynchronous routing, allowing the server to handle concurrent connections while waiting on Pinecone and OpenAI IO.
3. \`Hybrid Search\`: We moved from pure dense embeddings to a hybrid SPLADE + Dense vector approach. This drastically improved accuracy for specific keyword searches (like product IDs) while maintaining semantic understanding.

## Conclusion

RAG is simple to prototype but incredibly complex to scale. The key to high-throughput generative systems isn't just a faster LLM—it's building rigorous data engineering patterns around the retrieval step.
    `
  },
  {
    slug: 'practical-feature-engineering',
    title: 'The Unbearable Weight of Massive Time-Series Data',
    date: 'Jul 12, 2024',
    readTime: '8 min read',
    excerpt: 'How we processed 1.2TB of daily IoT sensor data from 50,000 cars using PySpark and survived to tell the tale.',
    category: 'Data Science',
    content: `
# The Unbearable Weight of Massive Time-Series Data

Working with IoT telemetry data from 50,000 connected vehicles at Harman was an incredible lesson in the physics of big data. You start by thinking about algorithms, but you spend all your time thinking about infrastructure.

## The Challenge

Every vehicle pushed metrics (speed, CAN bus anomalies, engine temps) every second. This resulted in over 1.2TB of raw JSON hitting our AWS S3 buckets every single day. Our initial Pandas-based Pandas jobs crashed immediately over Out Of Memory exceptions.

## Shifting to PySpark

We transitioned the entire pipeline to Apache Spark running on AWS EMR. 

The most critical optimization was dealing with the "small files problem." AWS Firehose was dumping thousands of tiny JSON files into S3 every minute. Spark spends more time opening tiny files than it does processing them. 

We wrote an initial compaction routine that grouped these JSON files into daily, partitioned Parquet files using snappy compression. 

## The Results

By shifting from JSON to partitioned Parquet, and leveraging PySpark's lazy evaluation engine, we reduced our daily ETL window from 4 hours to just under 2 minutes. This meant our downstream XGBoost and CNN models could train on perfectly clean, windowed data every afternoon instead of the middle of the night.
    `
  },
]
