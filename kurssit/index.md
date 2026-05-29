---
layout: page
title: "Kurssit"
lang: fi
permalink: /kurssit/
---

Tälle sivulle on koottu varjo-opinto-oppaan kurssisivut.

<table class="course-list">
  <thead>
    <tr>
      <th>Koodi</th>
      <th>Kurssi</th>
      <th>Kieli</th>
    </tr>
  </thead>
  <tbody>
    {% assign courses = site.pages | sort: "course_code" %}

    {% for course in courses %}
      {% if course.course_code %}
        {% if course.lang == course.default_lang or course.default_lang == nil %}
          <tr>
            <td>
              <a href="{{ course.url | relative_url }}">
                {{ course.course_code }}
              </a>
            </td>
            <td>
              <a href="{{ course.url | relative_url }}">
                {{ course.short_title | default: course.title }}
              </a>
            </td>
            <td>
              {{ course.lang | default: "?" }}
            </td>
          </tr>
        {% endif %}
      {% endif %}
    {% endfor %}
  </tbody>
</table>