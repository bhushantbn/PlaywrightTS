import {test as base} from '@playwright/test'
import { ai,aiFixture,type AiFixture } from '@zerostep/playwright'

export const test = base.extend<AiFixture>({
   ...aiFixture(base),
})