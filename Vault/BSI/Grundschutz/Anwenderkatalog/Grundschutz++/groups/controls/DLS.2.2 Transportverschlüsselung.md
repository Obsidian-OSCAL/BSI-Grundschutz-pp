---
tags:
- Lieferketten
- dls22-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DLS.2.2 Transportverschlüsselung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DLS.2.2 - Transportverschlüsselung
Tags: "[Lieferketten](tags_Lieferketten)"
Gruppe: [DLS.2 Nutzung von digitalen Dienstleistungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DLS.2%20Nutzung%20von%20digitalen%20Dienstleistungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Dienstleistersteuerung (DLS)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DLS%20Dienstleistersteuerung.md)**<br> ***  &rarr; [Nutzung von digitalen Dienstleistungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DLS.2%20Nutzung%20von%20digitalen%20Dienstleistungen.md) *** | Daten | SOLLTE | den Transport | bei der Übertragung zum Anbieter nach {{einem anerkannten Standard}} | verschlüsseln | Konfigurationshistorie | >Dienstleistersteuerung für Daten SOLLTE den Transport bei der Übertragung zum Anbieter nach {{ insert: param, dls.2.2-prm1 }} verschlüsseln.

> [!info]- Guidance
>„Transport“ bedeutet hier der technische Vorgang der Datenübertragung zwischen der Institution und dem Dienstleister, also etwa über das Internet oder dedizierte Leitungen. Der Sinn dieser Vorschrift liegt darin, die Vertraulichkeit und Integrität von Informationen zu schützen, wenn sie in fremde Infrastrukturen überführt werden. Ohne eine solche Maßnahme könnte ein Angreifer Daten während der Übertragung abfangen oder manipulieren, beispielsweise über „Man-in-the-Middle“-Angriffe oder durch Abhören unsicherer Netze. Da beschaffte Dienstleistungen typischerweise außerhalb der direkten Kontrolle der Institution liegen, gibt es hier eine eigene Vorgabe, um die besondere Risikosituation beim Übergang von interner zu externer Infrastruktur gezielt abzusichern. Eine Institution kann die Anforderung praktisch umsetzen, indem sie (1) den Einsatz von Protokollen wie TLS in allen Web- und API-basierten Schnittstellen zum Anbieter sicherstellt, (2) für administrative Zugänge oder besonders sensible Datenübertragungen zusätzlich VPN-Verbindungen nutzen kann, und (3) Zertifikatsprüfungen so konfiguriert, dass unsichere oder abgelaufene Zertifikate nicht akzeptiert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c9cd4b7e-8f76-4884-afb7-dcfd3d228624 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | c9cd4b7e-8f76-4884-afb7-dcfd3d228624 |

> [!info]- Links> > related: [BES.4.6.2 Verschlüsselung durch den Anbieter](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BES.4.6.2%20Verschlüsselung%20durch%20den%20Anbieter.md)
