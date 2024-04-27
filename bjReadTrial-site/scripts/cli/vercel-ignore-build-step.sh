#!/bin/bash
# VercelのIgnored Build Stepを使用して特定の条件のときにデプロイをスキップするためのスクリプト

RENOVATE_BRANCH_PREFIX='renovate/'
CONTENTFUL_BRANCH_PREFIX='contentful/'
# renovateの作成したPRの場合プレビューデプロイを行わない
if [[ "$VERCEL_GIT_COMMIT_REF" == "$RENOVATE_BRANCH_PREFIX"* ]] ; then
  echo "🛑 - Build cancelled"
  exit 0;
# contentful-typescript-codegenで作成したPRの場合プレビューデプロイを行わない
elif [[ "$VERCEL_GIT_COMMIT_REF" == "$CONTENTFUL_BRANCH_PREFIX"* ]] ; then
  echo "🛑 - Build cancelled"
  exit 0;
else
  echo "✅ - Build can proceed"
  exit 1;
fi

