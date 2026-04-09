---
tags:
- Produktbeschreibung_Brute-Force-Attacke
- konf115-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.11.5 Erraten von Zugriffslinks
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.11.5 - Erraten von Zugriffslinks
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Brute-Force-Attacke](tags_Brute-Force-Attacke)"
Gruppe: [KONF.11 Vertrauensbeziehungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.11%20Vertrauensbeziehungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Vertrauensbeziehungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.11%20Vertrauensbeziehungen.md) *** | Webanwendungen | SOLLTE | das Durchprobieren von Zugriffslinks | durch {{einen automatisierten Mechanismus}} | blockieren | Konfigurationshistorie | >Konfiguration für Webanwendungen SOLLTE das Durchprobieren von Zugriffslinks durch {{ insert: param, konf.11.5-prm1 }} blockieren.

> [!info]- Guidance
>Ermöglichen Links den Zugriff auf vertrauliche Daten ohne Authentifizierung, so könnten Angreifer versuchen diese zu finden, z.B. mit Durchprobieren von Meeting-Links oder Ressourcen-URLs. Mögliche Maßnahmen sind Nicht-Sequentielle IDs mit hoher Entropie, Rate Limiting von Anfragen oder CAPTCHA. Hierbei bietet sich eine Kombination von Maßnahmen an, die Anzahl erwarteter Zugriffe, Verfügbarkeits- und Usability-Kriterien ebenso beachtet wie das Risikoprofil der Anwendung. Bietet die Webanwendung keinerlei Zugriff auf schützenswerte Informationen ohne Authentifizierung, so ist die Anforderung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 951aea5d-e4c2-47c8-9a21-b1d00e3d499f |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 951aea5d-e4c2-47c8-9a21-b1d00e3d499f |
