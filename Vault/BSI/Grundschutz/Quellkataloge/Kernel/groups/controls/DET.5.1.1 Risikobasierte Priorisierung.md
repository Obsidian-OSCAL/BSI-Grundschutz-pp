---
tags:
- Advanced_Persistent_Threats_APT
- det511-prm1
- det511-prm2
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.5.1.1 Risikobasierte Priorisierung
parent_control: DET.5.1 Zeitnahes Schwachstellenmanagement
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.5.1.1 - Risikobasierte Priorisierung
Tags: "[Advanced Persistent Threats (APT)](tags_Advanced Persistent Threats (APT))"
Gruppe: [DET.5 Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md)
---

** Übergeordnetes Control: ** [DET.5.1 Zeitnahes Schwachstellenmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.5.1%20Zeitnahes%20Schwachstellenmanagement.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md) *** |  | KANN | erkannte Schwachstellen | anhand von {{risikobasierten Kriterien}} innerhalb {{einer Frist}} | überprüfen | Schwachstellenregister | >Detektion KANN erkannte Schwachstellen anhand von {{ insert: param, det.5.1.1-prm1 }} innerhalb {{ insert: param, det.5.1.1-prm2 }} überprüfen.

> [!info]- Guidance
>Bei einer risikobasierten Priorisierung wird nicht nur die Ausnutzbarkeit der Schwachstelle im Allgemeinen, z.B. durch einen CVS-Score, zur Priorisierung herangezogen, sondern die Beurteilung erfolgt durch eine Kombination solcher generellen Informationen mit dem individuellen Risikoprofil der betroffenen Assets. Dies ermöglicht es, Schwachstellen deutlich passgenauer zu beurteilen und die wirklich kritischen Schwachstellen zuerst zu patchen oder mitigieren.   Hierzu können CVSS-Score, Informationen aus der Threat Intelligence und aus der Risikobewertung von Geschäftsprozessen kombiniert werden. Hierbei können  auch automatisierte Verfahren angewendet werden, z.BMultiplikation von Kennzahlen zur Risikobewertung und von CVSS in Kombination mit Schwellwerten. Ergebnisdokument kann z.B. eine Risikomatrix, oder eine eigene CVE-Bewertungsrubrik sein.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | a9af82d7-44b8-412c-b8a0-becbda9b1da9 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | a9af82d7-44b8-412c-b8a0-becbda9b1da9 |
