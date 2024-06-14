---
sidebar_position: 3
---

# Overview

## What is Finesse?

Finesse is a semantic search engine we are developing. Unlike traditional search engines that match keywords, semantic search engines understand the intent and contextual meaning behind a query. Similar to Google and Bing, Finesse allows users to search for information. However, it searches only within specific document sets it is provided, not the entire web. The current working prototype, [finesse.inspection.alpha.canada.ca](https://finesse.inspection.alpha.canada.ca), is configured to search a set of documents crawled from the public website [inspection.canada.ca](https://inspection.canada.ca). Our ambition is for Finesse to be as secure, accurate, and fast as public search engines, while minimizing costs.

## Key Features

- Semantic Understanding: Provides more accurate search results by understanding the intent behind queries, not just the keywords.

- Multi-Language Support: Supports searches in various languages, provided the documents are available in those languages.

More features will be added over time.

## Why are we doing this?

While public search engines like Google and Bing are effective for general web searches, they do not have access to internal documents. The tools currently available to CFIA employees for searching internal documents are primarily keyword-based, which is outdated. Finding the right information is challenging and often painful for employees. An example of this is the Guidance Finder tool, accessible at [Guidance Finder](https://inspection.canada.ca/apps/eng/guidance). In response, we are developing Finesse, a semantic search engine tailored to efficiently search internal document sets and improve the search experience for our employees.

## Who is it intended for?

The Finesse search engine is primarily intended for CFIA employees. Currently, a group of champions—CFIA inspectors—are assisting in testing the prototype.

It is also open source, allowing anyone interested to use the code to develop their own applications.

- Frontend: [finesse-frontend](https://github.com/ai-cfia/finesse-frontend)
- Backend: [finesse-backend](https://github.com/ai-cfia/finesse-backend)
- Azure index integration: [azure-db](https://github.com/ai-cfia/azure-db)
- LlamaIndex integration: [llamaindex-db](https://github.com/ai-cfia/llamaindex-db)
- AI Lab custom index integration: [ailab-db](https://github.com/ai-cfia/ailab-db)
- API testing tools: [api-test](https://github.com/ai-cfia/api-test)
