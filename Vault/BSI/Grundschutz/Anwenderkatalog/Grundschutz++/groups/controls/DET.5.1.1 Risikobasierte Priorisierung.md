---
tags:
- advanced_persistent_threats_apt
- det511-prm1
- det511-prm2
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.5.1.1 Risikobasierte Priorisierung
parent_control: DET.5.1 Zeitnahes Schwachstellenmanagement
stmt_modal_verb: KANN
stmt_action_word: überprüfen
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.5.1.1 - Risikobasierte Priorisierung
Tag: [[tags_Advanced Persistent Threats (APT)|Advanced Persistent Threats (APT)]]
Gruppe: [DET.5 Management von Schwachstellen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.5%20Management%20von%20Schwachstellen.md)
---

** Übergeordnetes Control: ** [DET.5.1 Zeitnahes Schwachstellenmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.5.1%20Zeitnahes%20Schwachstellenmanagement.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Management von Schwachstellen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.5%20Management%20von%20Schwachstellen.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) |  | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | erkannte Schwachstellen | anhand von {{risikobasierten Kriterien}} innerhalb {{einer Frist}} | [überprüfen](action_words_überprüfen_907e4ee6-6eb8-4160-902d-5b037f417e6a) | Schwachstellenregister | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion KANN erkannte Schwachstellen anhand von {{ insert: param, det.5.1.1-prm1 }} innerhalb {{ insert: param, det.5.1.1-prm2 }} überprüfen.</span>

> [!info]- Guidance
>Bei einer risikobasierten Priorisierung wird nicht nur die Ausnutzbarkeit der Schwachstelle im Allgemeinen, z.B. durch einen CVS-Score, zur Priorisierung herangezogen, sondern die Beurteilung erfolgt durch eine Kombination solcher generellen Informationen mit dem individuellen Risikoprofil der betroffenen Assets. Dies ermöglicht es, Schwachstellen deutlich passgenauer zu beurteilen und die wirklich kritischen Schwachstellen zuerst zu patchen oder mitigieren.   Hierzu können CVSS-Score, Informationen aus der Threat Intelligence und aus der Risikobewertung von Geschäftsprozessen kombiniert werden. Hierbei können  auch automatisierte Verfahren angewendet werden, z.BMultiplikation von Kennzahlen zur Risikobewertung und von CVSS in Kombination mit Schwellwerten. Ergebnisdokument kann z.B. eine Risikomatrix, oder eine eigene CVE-Bewertungsrubrik sein.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | a9af82d7-44b8-412c-b8a0-becbda9b1da9 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | a9af82d7-44b8-412c-b8a0-becbda9b1da9 |
