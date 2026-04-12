---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ASST.3.5 Tainting
stmt_target_object_category: Daten
stmt_modal_verb: KANN
stmt_action_word: zuweisen
stmt_documentation: Arbeitsanweisung
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ASST.3.5 - Tainting
Gruppe: [ASST.3 Regelungen zum Gebrauch](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST.3%20Regelungen%20zum%20Gebrauch.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Informationen und Assets (ASST)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST%20Informationen%20und%20Assets.md)*<br> *  &rarr; [Regelungen zum Gebrauch](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ASST.3%20Regelungen%20zum%20Gebrauch.md) *</div> | [Informationen und Assets](practices_Informationen_und_Assets_02088622-573d-4225-883c-9afe0c7dc69b) | [Daten](target_object_categories_Daten_69d48234-d4c2-463d-9b76-c3a1580edd85) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | eine Markierung durch eingebettete Daten oder Funktionen zur Wiedererkennung |  | [zuweisen](action_words_zuweisen_bdb029e3-9154-4f33-a74b-5055a1ce4020) | [Arbeitsanweisung](documentation_guidelines_Arbeitsanweisung) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Informationen und Assets für Daten KANN eine Markierung durch eingebettete Daten oder Funktionen zur Wiedererkennung zuweisen.</span>

> [!info]- Guidance
>Zielt darauf ab, die Nachverfolgbarkeit und Kontextbindung von Daten zu ermöglichen, insbesondere in komplexen IT-Systemen, in denen Daten über viele Verarbeitungsschritte hinweg genutzt, kombiniert oder verteilt werden. Durch die Einbettung spezifischer, erkenntlicher Merkmale (z.B. Metadaten, Marker oder Funktionsventhalten) kann ein Datensatz identifizierbar gemacht werden, ohne dass seine Funktion oder Nutzbarkeit wesentlich eingeschränkt wird. Dies kann bei der Erkennung unerlaubter Datenweitergaben, der Nachverfolgung von Datenflüssen oder bei Sicherheitsanalysen hilfreich sein, insbesondere wenn potenziell sensible oder schützenswerte Daten im Spiel sind. Für welche Daten Tainting gezielt eingesetzt wird kann sich nach deren Klassifizierung oder einer spezifischen Risikoanalyse richten. Beispiele für Tainting-Mechanismen können sein: das Einfügen eines unsichtbaren Wasserzeichens in ein Dokument, das Anhängen kryptografisch prüfbarer Metadaten an Datensätze, Dummy-Datensätze oder das Verwenden von Datencontainern, die sich beim Zugriff oder bei der Weitergabe protokollierend venthalten. Auch das Markieren von Datenbankeinträgen mit zusätzlichen Attributen, die Rückschlüsse auf Herkunft, Vertrauensstufe oder Kontext erlauben, kann eine Form des Taintings darstellen. Ebenso kann bei Programmcode eine Markierung durch sogenannte Taint-Tracking-Systeme erfolgen, die überwachen, welche Eingaben in sicherheitskritische Operationen einfließen. Für die Umsetzung kann der Einsatz strukturierter Datenformate (wie XML oder JSON mit Markierungsfeldern), der Aufbau kontrollierter Datenflüsse mit Protokollierung oder das Nutzen von Middleware-Komponenten mit Tainting-Funktionalität in Betracht gezogen werden. Wichtig ist dabei, dass die Tainting-Informationen robust, interpretierbar und möglichst schwer entfernbar gestaltet werden, um ihre Wirksamkeit zu sichern. Die Wahl geeigneter Methoden hängt stark vom Anwendungskontext, den Schutzbedarfen und den bestehenden Systemarchitekturen ab.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 11c6919e-1dac-4816-9b42-88218c04c62b |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 11c6919e-1dac-4816-9b42-88218c04c62b |
