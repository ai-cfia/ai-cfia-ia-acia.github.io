---
title: Seed Classification
description: Automatic Quality Inspection using Computer Vision
slug: seed-classification
authors:
  name: Kiri Stern
  title: Intern
  email: kiri.stern@inspection.gc.ca
tags: [computer vision, quality, classification, AI]
---


## Introduction

Artificial Intelligence (AI) for computer vision has revolutionised our ability
to recover valuable insights from visual information. By combining AI algorithms
with visual data analysis, computer vision has revolutionized numerous sectors,
transforming the way we interact with machines. The advances computer vision
research and their integration in industries have created an unprecedented
opportunity for enhanced efficiency and accuracy in areas such as: quality
control, object detection and classification, surveillance, and more.


<!-- truncate -->

## Our mission

Here, at the CFIA's AI Lab, we harness the full potential of computer vision
models. Our dedicated team of Data Scientists leverage the power of this
transformative technology and develop customised solutions tailored to meet the
specific needs of our clients.

In this post, we motivate the need for computer vision models for automatic the
classification of seed species. We demonstrate how our custom models have
achieved promising results using "real-world" seed images and describe our
future directions for deploying a user-friendly SeedID application.

At the CFIA AI Lab, we strive not only to push the frontiers of science by
leveraging cutting-edge models but also in rendering these services accessible
to others and foster knowledge sharing, for the continuous advancement of our
Canadian society.

## Importance of Canada's seed industry

Manual seed sorting Canada’s multi-billion seed industry has established a
global reputation in the production, processing, and exportation of
premium-grade seeds across a diverse range of crops. Its success is achieved
through Canada’s commitment to innovation and development of advanced
technologies, allowing for the delivery of high-quality products that meet both
international and domestic needs.

Naturally, a collaboration between a research group from the Seed Science and
Technology Section and the AI Lab of CFIA formed to maintain Canada’s role as a
reputable leader in the global seed industry.

### Background: Quality Control

The seed quality of a crop is reflected in a grading report, whereby the final
grade reflects how well a seed lot conforms with Canada’s Seeds Regulations to
meet minimum quality standards. Factors used to determine crop quality include:
purity analysis and percent of seed germination and disease. The seed’s
germination rate and resistance to disease can provide insight into overall seed
health. Assessing content purity is essential in ensuring that the crop contains
a high concentration of the desired seed material and that it is free from
contaminants, such as other crop seeds or weed seeds. Seed inspection also plays
an important role in preventing the spread of prohibited and regulated species
listed in the Canadian Weed Seeds Order.

### Motivation

Presently, the evaluation of a crop’s quality is done manually by human experts.
However, this process is tedious and time consuming. At the AI Lab, we leverage
advanced computer vision models to automatically classify seed species from
images, rendering this process more efficient and reliable.

## Overcoming limitations using Computer Vision

### Shortage of Analysts

The shortage of expert seed analysts poses a significant challenge in the seed
industry. The demand for accurate and efficient seed quality assessment is
increasing, but the availability of highly trained analysts is limited. This
scarcity can lead to delays in turnaround time for quality assessments,
bottlenecks for seed trade, and potential errors in seed classification to
regulate species.

#### How AI helps

Computer vision presents a promising solution to overcome this shortage by
effectively analyzing and classifying seeds with minimal human intervention.
These models can be trained on vast datasets of seed images, enabling them to
recognize patterns, detect variations, and classify seeds based on predetermined
quality parameters.

By adopting computer vision models in seed analysis, companies and agricultural
institutions can alleviate the burden of expert shortages, streamline their
operations, and enhance overall productivity. This technology allows Canada to
meet the growing demand for seed quality assessments, leading to improved crop
yields, reliable seed selection, and ultimately, sustainable agricultural
practices.

### Time limitations

Manual analysis of seeds is a time-consuming process that poses challenges in
terms of efficiency and speed. Seed classification is time-consuming due to the
complexity and volume of seed samples. Human experts require significant time
and effort to visually inspect and classify each seed, leading to bottlenecks
and potential delays in the quality control process.

#### How AI helps (Time limitation)

Computer vision models offer a solution to these bottlenecks by automating the
analysis. By rapidly processing large volumes of seed samples, they
significantly reduce the time required for classification enabling faster and
more efficient seed classification while maintaining accuracy and consistency.

### Cost

Developing expertise in seed analysis demands extensive training and exposure to
diverse seed samples, which can be both expensive and time-consuming. The
associated costs and time required to train expert analysts include not only the
training programs but also the resources required for practical hands-on
experience. The time it takes for analysts to gain the necessary proficiency and
experience can be lengthy, further exacerbating the shortage of qualified
professionals.

#### How AI helps (Cost)

Computer vision models can offer a more scalable and efficient approach to seed
analysis, mitigating the costs and time constraints associated with training
expert analysts. Models can be trained on large datasets of seed images,
eliminating the need for extensive human training. Additionally, computer vision
models can continuously learn and improve over time, rapidly adapting to new
seed varieties and enhancing their accuracy. Moreover, they eliminate the
subjective biases that may arise from human interpretation, providing an
objective and standardized assessment of seed quality.

By leveraging the power of computer vision, the seed industry can overcome the
limitations associated with labor shortages, time constraints and training
costs, enabling faster and more efficient seed analysis.

## Objective: automatic classification of seed species

This project aims to develop and deploy a powerful computer vision pipeline for
seed species classification. By automating this classification process, we are
able to streamline and accelerate the assessment of crop quality. We develop
upon advanced algorithms and deep learning techniques, while ensuring an
unbiased and efficient evaluation of crop quality, paving the way for improved
agricultural practices.

## Project #1: Multispectral Imaging and Analysis

In this project, we employ a custom computer vision model to assess content
purity, by identifying and classifying desired seed species from undesired seed
species.

We successfully recover and identify the contamination by three different weed
species in a screening mixture of wheat samples.

Our model is customised to accept unique high resolution, 19-channel
multi-spectral image inputs and achieves greater than 95% accuracy on held out
testing data.

We further explored our model's potential to classify new species, by injecting
five new canola species into the dataset and observe similar results. These
encouraging findings highlight our model's potential for continual use even as
new seed species are introduced.

### Data

Our model was trained to classify the following species:

- Three different Canada Thistle (weed) species:
  - Cirsium arvense
  - Carduus nutans
  - Cirsium vulgare
- One species of Wheat:
  - Triticum aestivum subspecies aestivum
- Five different Canola species:
  - Brassica napus subspecies napus
  - Brassica juncea
  - Brassica juncea (yellow)
  - Brassica rapa subspecies oleifera
  - Brassica rapa subspecies oleifera (brown)

### Results

We show our model is able to correctly identify each seed species with an
accuracy of over 95%.

Moreover, when the three Canada Thistle seeds were integrated with the wheat
screening, the model achieved an average accuracy of 99.64% across 360 seeds.
This demonstrates the model's robustness and ability to classify new images.

Finally, we introduce five new canola species and evaluate our model's
performance. Preliminary results from this experiment show a ~93% accuracy on
the testing data.

## Project #2: Digital Microscope RGB Imaging and Analysis

In this project, we employ a 2-step process to identify a total of 15 different
seed species across varying magnification levels.

First, a seed segmentation model is used to identify each instance of a seed in
the image. Then, a classification model classifies each seed species instance.

We perform multiple ablation studies by training on one magnification profile
then testing on seeds coming from a different magnification set. We show
promising preliminary results of over 90% accuracy across magnification levels.

### Data (Project #2)

Three different magnification levels were provided for the following 15 species:

- Ambrosia artemisiifolia
- Ambrosia trifida
- Ambrosia psilostachya
- Brassica junsea
- Brassica napus
- Bromus hordeaceus
- Bromus japonicus
- Bromus secalinus
- Carduus nutans
- Cirsium arvense
- Cirsium vulgare
- Lolium temulentum
- Solanum carolinense
- Solanum nigrum
- Solanum rostratum

Magnification level is denoted by the total number of seeds present in the
image, either: 2, 8, or 15 seeds per image.

### Results (Project #2)

In order to establish a standardised image registration protocol, we
independently train separate models from a subset of data at each magnification
then evaluate model performance across a reserved test set for all magnification
levels.

Preliminary results demonstrate the model's ability to correctly identify seed
species across magnifications with over 90% accuracy.

This demonstrates the model's potential to accurately classify previously unseen
data at varying magnification levels.

### Challenges

We recognise the challenges associated with data obtained by different methods
and modalities. We strive to continue to enhance our model's robustness by
incorporating more seed species, improve generalisation across magnification
levels, and reduce our 2-step model framework into 1 for better efficiency.

## Next steps: Deployment

With the successful development of our advanced computer vision model for seed
image classification, our next focus is on deploying this powerful tool in an
open-source, user-friendly application: SeedID. Our aim is to provide an
intuitive and accessible platform that empowers users of all levels of expertise
to effortlessly classify seed samples with high accuracy and efficiency.

To achieve this, we will leverage the capabilities of our computer vision model
and combine it with an intuitive user interface, making the application easy to
navigate for users of all levels of expertise. The goal is to streamline the
seed analysis and classification process and eliminate any technical barriers
that may hinder its use.

Our deployment strategy also involves thorough testing and validation to ensure
the reliability and accuracy of the seed classification results. Rigorous
evaluation will enable us to fine-tune the model and address any potential
limitations or biases, guaranteeing robust performance across various seed types
and conditions.

Our vision is to empower users with a state-of-the-art seed image classification
application that seamlessly integrates computer vision technology. By deploying
this open-source, user-friendly solution, we aim to revolutionize the seed
industry--promoting efficiency, consistency, and accessibility in seed analysis
and contributing to the advancement of agricultural practices worldwide.

## Conclusion

The seed classification project is an example of the successful and ongoing
collaboration between the AI Lab and the Seed Science group at the CFIA. By
pooling our respective knowledge and expertise, both teams contribute to the
advancement of Canada's seed industry.

We showcase the success of leveraging advanced computational models as tools for
image processing tasks and demonstrate their potential to significantly enhance
the accuracy and efficiency of evaluating crop quality, ultimately benefiting
both the agricultural industry and consumers alike.

## Future: Call for collaboration

As Data Scientists, we recognise the importance of open-source collaboration and
we are committed to upholding the principles of open science. Our objective is
to promote transparency and engagement through open sharing with the public.

By making our application open-source, we invite fellow researchers, seed
experts, and developers to contribute to its further improvement and
customisation. This collaborative approach fosters innovation, allowing the
community to collectively enhance the capabilities of the ​​​​​​​SeedID
application and address specific domain requirements.
