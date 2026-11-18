const LOOM_EMBED_URL =
  'https://www.loom.com/embed/42793ca846334ae4abaa852139953262?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true'

const VideoResume = () => {
  return (
    <section id="video-resume" className="section-pad band-saffron">
      <div className="page-wrap">
        <p className="kicker">Video</p>
        <h2 className="display text-[36px] sm:text-[48px] leading-[1.1] mb-4">Two-minute intro</h2>
        <p className="body-light max-w-xl mb-10">
          Who I am, how I work on a client system, and the kind of products I stay with after launch.
        </p>
        <div className="max-w-4xl overflow-hidden rounded-3xl bg-void">
          <div className="relative w-full aspect-video">
            <iframe
              src={LOOM_EMBED_URL}
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              title="Hammad Ahmed — video resume"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoResume
