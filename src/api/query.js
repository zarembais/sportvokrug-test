export const query = `
{
  videostandEvents(videostand_id: 6) {
    current_and_upcoming {
      title
      is_main
      dt_start
      dt_end
      dt_create
    }
    finished {
      title
      is_main
      dt_start
      dt_end
      dt_create
    }
  }
}
`