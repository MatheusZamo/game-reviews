import { revalidateTag } from "next/cache"

const POST = async request => {
    const payload = await request.json()
    const eventShouldRevalidate = ['update', 'delete', 'publish', 'unpublish']
      .map(event => `entry.${event}`)
      .some(event => event === payload.event)

    if (payload.model === 'review' && eventShouldRevalidate) {
        revalidateTag('reviews')
        console.log(payload.event)
    }

    return new Response(null, { status: 204 })
}

export { POST }