<template>
    <Suspense>
    <template #default>
        <ProfileCard />
    </template>
    <template #fallback>
        <ProfileCardSkeleton />
    </template>
    </Suspense>
</template>
