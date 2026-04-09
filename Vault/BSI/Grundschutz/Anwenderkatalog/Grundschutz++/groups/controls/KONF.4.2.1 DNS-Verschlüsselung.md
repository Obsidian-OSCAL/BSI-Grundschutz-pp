---
tags:
- Produktbeschreibung_Cryptography
- konf421-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.4.2.1 DNS-Verschlüsselung
parent_control: KONF.4.2 DNS-Anbindung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.4.2.1 - DNS-Verschlüsselung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Cryptography](tags_Cryptography)"
Gruppe: [KONF.4 Vertrauenswürdige Basisdienste](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md)
---

** Übergeordnetes Control: ** [KONF.4.2 DNS-Anbindung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.4.2%20DNS-Anbindung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Vertrauenswürdige Basisdienste](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md) *** | IT-Systeme | SOLLTE | DNS-Verbindungen | durch {{einen anerkannten kryptographischen Algorithmus}} | verschlüsseln | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE DNS-Verbindungen durch {{ insert: param, konf.4.2.1-prm1 }} verschlüsseln.

> [!info]- Guidance
>DNS-Verschlüsselung, im Englischen oft als DNS over TLS (DoT) oder DNS over HTTPS (DoH) bezeichnet, ist ein Verfahren, bei dem Anfragen zur Namensauflösung im Internet kryptographisch geschützt werden, um deren Vertraulichkeit und Integrität sicherzustellen. Erfolgen diese Anfragen unverschlüsselt, könnte ein Angreifer im Netz die aufgerufenen Webseiten und Dienste eines Nutzers mitlesen und protokollieren. Schlimmer noch, ein Angreifer könnte die Antworten manipulieren, um den Nutzer unbemerkt auf gefälschte Webseiten umzuleiten, beispielsweise für Phishing-Angriffe. Die Aktivierung der DNS-Verschlüsselung kann einem solchen Ausspähen und Manipulieren der Namensauflösung effektiv entgegenwirken und stellt sicher, dass die Kommunikation zwischen dem Client und dem DNS-Server authentisch und nicht einsehbar ist. Nutzt das System kein DNS, so ist die Anforderung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ccb6bfb1-1b49-4d03-9705-2d05bca018b5 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | ccb6bfb1-1b49-4d03-9705-2d05bca018b5 |
