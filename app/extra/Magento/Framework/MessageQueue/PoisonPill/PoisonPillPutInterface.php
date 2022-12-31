<?php

namespace Magento\Framework\MessageQueue\PoisonPill;

interface PoisonPillPutInterface
{

    /**
     * Put new version of poison pill inside DB.
     *
     * @return string
     * @throws \Exception
     */
    public function put(): string;

}