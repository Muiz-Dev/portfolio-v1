CREATE TABLE reviews (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  status        TEXT NOT NULL DEFAULT 'pending'
                CHECK (status IN ('pending', 'approved', 'rejected')),

  -- Client info
  client_name   TEXT NOT NULL,
  business      TEXT NOT NULL,
  role          TEXT,                          -- "Director", "Founder", etc.

  -- Review content
  service       TEXT NOT NULL,                 -- "Website Development", etc.
  rating        SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  feedback      TEXT NOT NULL,

  -- Display flags
  featured      BOOLEAN NOT NULL DEFAULT false,

  -- Consent
  permission    BOOLEAN NOT NULL DEFAULT true, -- Must be true to submit

  -- Metadata
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  reviewed_at   TIMESTAMPTZ,                   -- When approved/rejected
  ip_address    INET,                          -- Spam protection

  -- Optional: link to a project
  project_slug  TEXT                           -- "gp-smith-accountax"
);

CREATE INDEX idx_reviews_status ON reviews (status);
CREATE INDEX idx_reviews_featured ON reviews (featured) WHERE status = 'approved';
